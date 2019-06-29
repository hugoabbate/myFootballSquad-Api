const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  userController = require('../app/controllers/usersController');
  // authenticate = require('../app/services/authentication');

/* GET users listing. */
router.get('/', wrapAsync(userController.getUsers));

router.post('/signup', wrapAsync(userController.signup));

router.post('/login', wrapAsync(userController.login));

router.get('/:id', wrapAsync(userController.getUserById));

router.get('/current', wrapAsync(userController.getCurrent));

module.exports = router;
