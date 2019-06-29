const Mongoose = require('mongoose');
const MongooseSchema = Mongoose.Schema;

const MatchSchema = new Mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  courtName: {
    type: MongooseSchema.ObjectId, ref: 'Court'
  },
  courtSize: {
    type: Number
  },
  team: {
    type: MongooseSchema.ObjectId, ref: 'Squad'
  },
  matchDate: {
    type: Date,
    required: true
  },
  assistList: [ {
    type: MongooseSchema.ObjectId, ref: 'User'
  } ],
  playersA: [ {
    type: MongooseSchema.ObjectId, ref: 'User'
  } ],
  playersB: [ {
    type: MongooseSchema.ObjectId, ref: 'User'
  } ],
  subPlayersA: [ {
    type: MongooseSchema.ObjectId, ref: 'User'
  } ],
  subPlayersB: [ {
    type: MongooseSchema.ObjectId, ref: 'User'
  } ],
  result: {
    type: String
  },
  playerOfTheMatch: {
    type: MongooseSchema.ObjectId, ref: 'User'
  },
  price: {
    type: Number
  }
});

const Match = Mongoose.model('Match', MatchSchema);

module.exports = Match;
