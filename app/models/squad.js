const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const MongooseSchema = Mongoose.Schema;

const SquadSchema = new Mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String
  },
  squadName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  courtName: {
    type: MongooseSchema.ObjectId, ref: 'Court'
  },
  users: [ {
    type: MongooseSchema.ObjectId, ref: 'User'
  } ]
});

SquadSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const Squad = Mongoose.model('Squad', SquadSchema);

module.exports = Squad;
