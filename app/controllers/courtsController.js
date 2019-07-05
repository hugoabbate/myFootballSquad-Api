const Court = require('../models/court');
const controller = {};
const { responserFor } = require('../utils');
const { NoDataError, DataNotFound } = require('../errors');

// Create
controller.create = async ( req, res ) => {
  const responser = responserFor(res);
  
  const { courtName, courtSize } = req.body;

  if (!courtName || !courtSize) {
    throw new NoDataError('Missing Argument');
  }

  const courtNameValidation = await Court.findOne({courtName: courtName});
  
  if (!courtNameValidation) {
    const newCourt = await new Court({
      courtName: courtName,
      courtSize: courtSize
    });
    
    created = await newCourt.save();
  } else {
    created = 'CourtName Already Exist';
  }

  responser.send(created);
};

// getCourts
controller.getAll = async (req, res) => {
  const responser = responserFor(res);
  const courts = await Court.find();

  responser.send(courts);
};

// getCourtById
controller.byId = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if (!id) {
    throw new NoDataError('Missing Argument');
  }

  const courtById = await Court.findOne({_id: id});

  if (!courtById) {
    throw new DataNotFound('Data Not Found');
  }

  responser.send(courtById);
};

// updateCourt
controller.update = async (req, res) => {
  const responser = responserFor(res);
  const courtName = req.body.courtName;
  const query = { _id: req.params.id};

  if (!courtName || !query) {
    throw new NoDataError('Missing Argument')
  }

  courtNameValidation = await Court.findOne({_id: query});
  
  if (!courtNameValidation) {
    throw new DataNotFound('DataNotFound')
  } else {
    const court = {
      courtName,
      $currentDate: {updated: true}
    };
    const updatedData = await Court.findOneAndUpdate(query, court);

    updateControl = {
      success: (updatedData !== undefined)
    };
  
  }

  responser.send(updateControl);
};

// deleteCourtById}

controller.delete = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if (!id) {
    throw new NoDataError('Missing Argument');
  }

  const courtValidation = await Court.findById({_id: id});

  if (!courtValidation) {
    throw new DataNotFound('DataNotFound')
  }

  const deleted = await Court.findOneAndDelete({_id: id});

  const deletedControl = {
    success: (deleted !== undefined)
  };
  
  responser.send(deletedControl);
};

module.exports = controller;
