const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  matchesController = require('../app/controllers/matchesController');

router.put('/', wrapAsync(matchesController.create));

router.get('/', wrapAsync(matchesController.getAll));

router.get('/:id', wrapAsync(matchesController.getMatch));

router.get('/Squad/:id', wrapAsync(matchesController.squadId));

router.get('/Court/:id', wrapAsync(matchesController.courtId));

router.get('/Date/:id', wrapAsync(matchesController.date)); // verificar route con calvin

router.patch('/:id', wrapAsync(matchesController.updateById));

router.patch('/:id/assistance', wrapAsync(matchesController.addToAssistList));

router.post('/:id/createRandomTeams/', wrapAsync(matchesController.createRandomTeams));

router.delete('/:id', wrapAsync(matchesController.delete));

router.delete('/', wrapAsync(matchesController.deleteByCourtAndDate));

router.patch('/:id/pullUser', wrapAsync(matchesController.pullUserOfMatch));

module.exports = router;
