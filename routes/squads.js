const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  squadsController = require('../app/controllers/squadsController');


router.post('/', wrapAsync(squadsController.create));

router.get('/', wrapAsync(squadsController.getAll));

router.get('/:id', wrapAsync(squadsController.getSquadById));

router.post('/:id', wrapAsync(squadsController.updateSquad));

router.get('/byuserid/:id', wrapAsync(squadsController.getSquadByUserId));

router.delete('/:id', wrapAsync(squadsController.deleteSquad));

router.delete('/deleteUserInASquad/:id', wrapAsync(squadsController.deleteUserInASquads));

router.post('/addUserInASquad/:id', wrapAsync(squadsController.addUserInASquad));


module.exports = router;
