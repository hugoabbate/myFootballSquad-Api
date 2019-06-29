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

  const newCourt = await new Court({
    courtName: courtName,
    courtSize: courtSize
  });

  const created = await newCourt.save();

  const createdControl = {
    success: (created !== undefined)
  };

  responser.send(createdControl);
};

// getCourts
controller.getAll = async (req, res) => {
  const responser = responserFor(res);
  const courts = await Court.find();

  responser.send(courts);
};

// getCourtById
controller.getCourtById = async (req, res) => {
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
controller.updateCourt = async (req, res) => {
  const responser = responserFor(res);
  const courtName = req.body.courtName;
  const query = { _id: req.params.id};

  if (!courtName || !query) {
    throw new NoDataError('Missing Argument')
  }

  const court = {
    courtName,
    $currentDate: {updated: true}
  };

  const updatedData = await Court.findOneAndUpdate(query, court);

  const updateControl = {
    success: (updatedData !== undefined)
  };


  responser.send(updateControl);
};

// deleteCourtById}

controller.deleteCourt = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;

  if (!id) {
    throw new NoDataError('Missing Argument');
  }

  const deleted = await Court.findOneAndDelete({_id: id});

  const deletedControl = {
    success: (deleted !== undefined)
  };
  
  responser.send(deletedControl);
};

module.exports = controller;
