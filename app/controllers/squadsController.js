const Squad = require('../models/squad');
const controller = {};
const { responserFor } = require('../utils');
const {NoDataError, DataNotFound } = require('../errors');
const bcrypt = require('bcrypt');

// Create
controller.create = async ( req, res ) => {
  const responser = responserFor(res);

  const { squadName, password, courtName, users } = req.body;

  if(!squadName || !password || !courtName || !users) {
    throw new NoDataError('Missing Argument');
  }

  const squadValidation = await Squad.findOne({squadName: squadName});
  
  if (!squadValidation) {
    const newSquad = await new Squad({
      squadName: squadName,
      password: password,
      courtName: courtName,
      users: users
    });
    
    created = await newSquad.save();
  } else {
    created = 'SquadName already exist'
  }

  responser.send(created);
};

// Get
controller.getAll = async (req, res) => {
  const responser = responserFor(res);
  const squads = await Squad.find().populate({path: 'users', select: 'username'})
    .populate({path: 'courtName', select: 'courtName'});

  responser.send(squads);
};

// GetbyId
controller.getById = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;
  const password = req.body.password;


  if(!id) {
    throw new NoDataError('Missing Argument');
  }


  const squad = await Squad.findOne( {_id: id}).populate({ path: 'users', select: 'username'}).populate({path: 'courtName', select: 'courtName'});

  if(!squad) {
    throw new DataNotFound('Data Not Found');
  } else if (bcrypt.compareSync(password, squad.password)) {
    responser.send(squad);
  } else {
    responser.send('Error 403: Forbidden');
  }
};

// Update
controller.update = async (req, res) => {
  const responser = responserFor(res);
  const query = {_id: req.params.id};
  const { squadName, courtName } = req.body;

  if(!squadName || !courtName) {
    throw new NoDataError('Missing Argument');
  }

  const squad = {
    squadName,
    courtName,
    $currentDate: {updated: true}
  };
  
  const updatedData = await Squad.findOneAndUpdate(query, squad);

  const updateControl = {
    success: (updatedData !== undefined)
  };

  responser.send(updateControl);
};

// GetByUserID
controller.byUserId = async (req, res) => {
  const responser = responserFor(res);

  const id = req.params.id;

  if(!id) {
    throw new NoDataError('Missing Argument');
  }

  const squad = await Squad.find({ users: id }).populate({ path: 'users', select: 'username'}).populate({path: 'courtName', select: 'courtName'});


  responser.send(squad);
};

// Delete
controller.delete = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if(!id) {
    throw new NoDataError('Missing Argument');
  }
  const deleted = await Squad.findOneAndDelete({_id: id});
  
  const deletedControl = {
    success: (deleted !== undefined)
  };
  
  responser.send(deletedControl);
};

// Delete UserInSquads
controller.userInSquads = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if(!id) {
    throw new NoDataError('Missing Argument');
  }
  const user = await Squad.updateMany({ $pull: {users: {$in: [ id ]}} });
  
  responser.send(user);
};

// Add an User into a Squad
controller.addUser = async (req, res) => {
  const responser = responserFor(res);

  const query = {
    _id: req.params.id
  };

  if(!query) {
    throw new NoDataError('Missing Argument');
  }

  const addedUsers = {
    $currentDate: {updated: true},
    $push: { users: req.body.users }
  };

  const updated = await Squad.findOneAndUpdate(query, addedUsers);
  
  const updateControl = {
    success: (updated !== undefined)
  };
  
  responser.send(updateControl);
};

module.exports = controller;
