const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  courtsController = require('../app/controllers/courtsController');


router.put('/', wrapAsync(courtsController.create));

router.get('/', wrapAsync(courtsController.getAll));

router.get('/:id', wrapAsync(courtsController.byId));

router.patch('/:id', wrapAsync(courtsController.update));

router.delete('/:id', wrapAsync(courtsController.delete));

module.exports = router;
