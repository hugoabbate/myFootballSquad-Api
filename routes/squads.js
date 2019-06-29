const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  squadsController = require('../app/controllers/squadsController');


router.put('/', wrapAsync(squadsController.create));

router.get('/', wrapAsync(squadsController.getAll));

router.get('/:id', wrapAsync(squadsController.getById));

router.patch('/:id', wrapAsync(squadsController.update));

router.get('/byUser/:id', wrapAsync(squadsController.byUserId));

router.delete('/:id', wrapAsync(squadsController.delete));

router.delete('/userInSquad/:id', wrapAsync(squadsController.userInSquads));

router.patch('/addUser/:id', wrapAsync(squadsController.addUser));


module.exports = router;
