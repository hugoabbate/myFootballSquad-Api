const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  userController = require('../app/controllers/usersController');
  // authenticate = require('../app/services/authentication');

/* GET users listing. */
router.get('/', wrapAsync(userController.getAll));

router.put('/signUp', wrapAsync(userController.signUp));

router.post('/login', wrapAsync(userController.login));

router.get('/:id', wrapAsync(userController.getById));

module.exports = router;
