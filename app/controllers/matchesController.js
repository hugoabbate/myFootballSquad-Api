const Match = require('../models/match');
const Squad = require('../models/squad');
const controller = {};
const { responserFor } = require('../utils');
const {NoDataError, DataNotFound} = require('../errors');

const shuffle = array => {
  const shuffledArray = array;
  let currentIndex = shuffledArray.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0 ) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }
  return shuffledArray;
};


// Create
controller.create = async (req, res) => {
  const responser = responserFor(res);

  const { courtName, courtSize, team, matchDate, price } = req.body;

  if(!courtName || !courtSize || !team || !matchDate || !price) {
    throw new NoDataError('Missing Argument');
  }

  const newMatch = await new Match({
    courtName: courtName,
    courtSize: courtSize,
    team: team,
    matchDate: matchDate,
    price: price
  });

  created = await newMatch.save();

  responser.send();
};

// Get
controller.getAll = async (req, res) => {
  const responser = responserFor(res);
  const matches = await Match.find().populate({path: 'courtName', select: 'courtName'})
    .populate({path: 'team', select: 'squadName'})
    .populate({path: 'assistList', select: 'username'})
    .populate({path: 'playersA', select: 'username'})
    .populate({path: 'playersB', select: 'username'})
    .populate({path: 'subPlayersA', select: 'username'})
    .populate({path: 'subPlayersB', select: 'username'});

  responser.send(matches);
};

// GetMatchById
controller.getMatch = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if (!id) {
    throw new NoDataError('MissingArgument');
  }

  const match = await Match.findOne({_id: id}).populate({path: 'courtName', select: 'courtName'})
    .populate({path: 'courtSize', select: 'courtSize'})
    .populate({path: 'team', select: 'squadName'})
    .populate({path: 'assistList', select: 'username'})
    .populate({path: 'playersA', select: 'username'})
    .populate({path: 'playersB', select: 'username'})
    .populate({path: 'subPlayersA', select: 'username'})
    .populate({path: 'subPlayersB', select: 'username'});

  responser.send(match);
};

// GetMatchesBySquadId
controller.squadId = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if (!id) {
    throw new NoDataError('MissingArgument');
  }

  const match = await Match.find({team: id}).populate({path: 'courtName', select: 'courtName'})
    .populate({path: 'courtSize', select: 'courtSize'})
    .populate({path: 'team', select: 'squadName'})
    .populate({path: 'playersA', select: 'username'})
    .populate({path: 'playersB', select: 'username'})
    .populate({path: 'subPlayersA', select: 'username'})
    .populate({path: 'subPlayersB', select: 'username'});

  responser.send(match);
};

// GetMatchesByCourtId
controller.courtId = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if (!id) {
    throw new NoDataError('Missing Argument');
  }

  const matches = await Match.find({courtName: id}).populate({path: 'courtName', select: 'courtName'})
    .populate({path: 'courtSize', select: 'courtSize'})
    .populate({path: 'team', select: 'squadName'})
    .populate({path: 'playersA', select: 'username'})
    .populate({path: 'playersB', select: 'username'})
    .populate({path: 'subPlayersA', select: 'username'})
    .populate({path: 'subPlayersB', select: 'username'});

  responser.send(matches);
};

// GetMatchesByDay - Preguntar a Calvin
controller.date = async (req, res) => {
  const responser = responserFor(res);
  const matchDate = req.body.matchDate;

  if (!matchDate) {
    throw new NoDataError('Missing Argument');
  }

  const matches = await Match.find({matchDate: matchDate}).populate({path: 'courtName', select: 'courtName'})
    .populate({path: 'team', select: 'squadName'})
    .populate({path: 'playersA', select: 'username'})
    .populate({path: 'playersB', select: 'username'})
    .populate({path: 'subPlayersA', select: 'username'})
    .populate({path: 'subPlayersB', select: 'username'});


  responser.send(matches);
};

// updateMatchById
controller.updateById = async (req, res) => {
  const responser = responserFor(res);
  const {courtName, courtSize, team, matchDate, price} = req.body;

  if (!courtName || !courtSize || !team || !matchDate || !price) {
    throw new NoDataError('Missing Argument');
  }

  const match = {
    courtName,
    courtSize,
    team,
    matchDate,
    price,
    $currentDate: {updated: true}
  };

  const query = {
    _id: req.params.id
  };

  const updatedData = await Match.findByIdAndUpdate(query, match);

  const updatedControl = {
    success: (updatedData !== undefined)
  };

  responser.send(updatedControl);
};

// deleteById
controller.delete = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if(!id) {
    throw new DataNotFound('Missing Argument');
  }
  
  const deletedMatch = await Match.findOneAndDelete({_id: id});

  const deletedControl = {
    success: (deletedMatch !== undefined)
  };

  responser.send(deletedControl);
};

// deleteMatch
controller.deleteByCourtAndDate = async (req, res) => {
  const responser = responserFor(res);
  const courtName = req.body.courtName;
  const matchDate = req.body.matchDate;

  if (!courtName || !matchDate) {
    throw new NoDataError('Missing Argument');
  }

  const deleted = await Match.findOneAndDelete({$and: [ {courtName: courtName}, {matchDate: matchDate} ]});

  const deletedControl = {
    success: (deleted !== undefined)
  };

  responser.send(deletedControl);
};

// AddToAssistList
controller.addToAssistList = async (req, res) => {
  const responser = responserFor(res);
  const query = req.params.id;
  const user = req.body.user;

  if(!query || !user) {
    throw new NoDataError('Missing Argument');
  }

  const match = await Match.findOne({_id: query});
  const squad = await Squad.findOne({_id: match.team._id});

  if (!match || !squad) {
    throw new DataNotFound('Data Not Found');
  }
  
  let saved = {};

  if (squad.users.indexOf(user) > -1) {
    if (match.assistList.indexOf(user) > -1) {
      saved = 'already exist';
    } else {
      match.assistList.push(user);
      match.save();
      saved = 'Success';
    }
  } else {
    saved = 'is not on the Squad';
  }

  responser.send(saved);
};

// Function de creacion de equipos
const createTeams = match => {
  if (!match) {
    throw new DataNotFound('Data Not Found');
  }

  // const size = match.courtSize.courtSize;

  if (match.assistList.length >= match.courtSize * 2) {
    let assist = [];

    assist = match.assistList.slice(0, 10);
    teams = shuffle(assist);
    teamA = teams.slice(0, 5);
    teamB = teams.slice(5, 10);
  } else {
    return '';
  }

  return { teamA, teamB };
};


// createRandomTeams
controller.createRandomTeams = async (req, res) => {
  const responser = responserFor(res);
  const query = req.params.id;
  
  if(!query) {
    throw new NoDataError('Missing Argument');
  }

  const match = await Match.findOne({_id: query});
  
  const teams = createTeams(match);

  if (!teams) {
    resp = 'Not enough players'
  } else {
    let currentIndex = teams.teamA.length;

    while (currentIndex !== 0) {
      currentIndex -= 1;
      match.playersA.push(teams.teamA[currentIndex]);
      match.playersB.push(teams.teamB[currentIndex]);
    }
    const test = await Match.findByIdAndUpdate({_id: query }, match);

    resp = test;
  }

  responser.send(resp);
};

module.exports = controller;
