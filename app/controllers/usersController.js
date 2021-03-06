const User = require('../models/user');
const controller = {};
const { responserFor } = require('../utils');
const { NoDataError, DataNotFound } = require('../errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//singUp
controller.signup = async (req, res) => {
  const responser = responserFor(res);
  const {email, username, password} = req.body;

  if (!email || !username || !password) {
    return false;
  }

  const newUser = await new User({
    email: email,
    username: username,
    password: password
    
  });

  await newUser.save();


  responser.send();
};

//getUsers
controller.getUsers = async (req, res) => {
  const responser = responserFor(res);
  const users = await User.find();

  responser.send(users);
};

//getUsersById
controller.getUserById = async (req, res) => {
  const responser = responserFor(res);
  const id = req.params.id;
  const user = await User.findById(id);

  responser.send(user);
};

//login
controller.login = async (req, res) => {
  const responser = responserFor(res);
  const {username, password} = req.body;
  const secretKey = 'sarlanga';

  if(!username || !password) {
    throw new NoDataError('Missing arg');
  }

  const authUser = await User.findOne({username: username});

  if (!authUser) {
    throw new DataNotFound('Data Not Found');
  } else if (bcrypt.compareSync(password, authUser.password)) {
    const token = jwt.sign({id: authUser._id}, secretKey, { expiresIn: '2h'});

    responser.send(token); //Devolver Data de user y Token
  } else {
    responser.send('Fail');
  }
};

module.exports = controller;
