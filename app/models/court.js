const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  courtName: {
    type: String,
    trim: true,
    required: true
  },
  courtSize: [
    {type: Number}
  ]
});

const Court = mongoose.model('Court', CourtSchema);

module.exports = Court;
