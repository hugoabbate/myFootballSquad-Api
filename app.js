const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  winston = require('winston'),
  mongoose = require('mongoose');

const indexRouter = require('./routes/index'),
  usersRouter = require('./routes/users'),
  squadsRouter = require('./routes/squads'),
  courtsRouter = require('./routes/courts'),
  matchesRouter = require('./routes/matches');

const { responserFor } = require('./app/utils');

const app = express();

winston.level = process.env.LOGLEVEL || 'info';
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MongooseConnect
// To Do: pasar dote env
mongoose.connect('mongodb://admin:5GM24dbSkjDpTgb@ds161823.mlab.com:61823/myfootballsquad', err => {
  if (err) throw err;
  winston.info('Succesfully connected');
});

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/squads', squadsRouter);
app.use('/api/courts', courtsRouter);
app.use('/api/matches', matchesRouter);

// middleware that catch any error
app.use((err, req, res, next) => {
  winston.error(err);
  const responser = responserFor(res);

  responser.send(err);
});

module.exports = app;
