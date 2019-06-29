const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  courtsController = require('../app/controllers/courtsController');


router.post('/', wrapAsync(courtsController.create));

router.get('/', wrapAsync(courtsController.getAll));

router.get('/:id', wrapAsync(courtsController.getCourtById));

router.post('/:id', wrapAsync(courtsController.updateCourt));

router.delete('/:id', wrapAsync(courtsController.deleteCourt));

module.exports = router;
