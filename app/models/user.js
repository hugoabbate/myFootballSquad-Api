const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return re.test(email);
};

const UserSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: [ validateEmail, 'Please fill a valid email address' ],
    match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address' ]
  },
  username: {
    type: String,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
