const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  matchesController = require('../app/controllers/matchesController');

/**
 * @api {put} /api/matches/ Create Match
 * @apiName create
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiParamExample {json} Request-Example:
 * {
 *    "courtName": "5ce6d6628cb61b38141c7088",
 *    "courtSize": "5",
 *    "team": "5ce6d7ce8cb61b38141c708c",
 *    "matchDate": "2019-06-04T18:00:00.0000",
 *    "price": "1245"
 *  }
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "data": {
 *      "assistList": [],
 *      "playersA": [],
 *      "playersB": [],
 *      "subPlayersA": [],
 *      "subPlayersB": [],
 *      "_id": "5d1ea8db7b0dd00c27f1c3f0",
 *      "courtName": "5ce6d6628cb61b38141c7088",
 *      "courtSize": 5,
 *     "team": "5ce6d7ce8cb61b38141c708c",
 *       "matchDate": "2019-06-04T21:00:00.000Z",
 *      "price": 1245,
 *      "created": "2019-07-05T01:33:15.769Z",
 *      "updated": "2019-07-05T01:33:15.769Z",
 *      "__v": 0
 *  }
 *}
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.put('/', wrapAsync(matchesController.create));

/**
 * @api {get} /api/matches/ Get Matches
 * @apiName get
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "data": {
 *      "assistList": [],
 *      "playersA": [],
 *      "playersB": [],
 *      "subPlayersA": [],
 *      "subPlayersB": [],
 *      "_id": "5d1ea8db7b0dd00c27f1c3f0",
 *      "courtName": "5ce6d6628cb61b38141c7088",
 *      "courtSize": 5,
 *     "team": "5ce6d7ce8cb61b38141c708c",
 *       "matchDate": "2019-06-04T21:00:00.000Z",
 *      "price": 1245,
 *      "created": "2019-07-05T01:33:15.769Z",
 *      "updated": "2019-07-05T01:33:15.769Z",
 *      "__v": 0
 *  }
 *}
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/', wrapAsync(matchesController.getAll));

/**
 * @api {get} /api/matches/:id Get Match
 * @apiName get
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "data": {
 *      "assistList": [],
 *      "playersA": [],
 *      "playersB": [],
 *      "subPlayersA": [],
 *      "subPlayersB": [],
 *      "_id": "5d1ea8db7b0dd00c27f1c3f0",
 *      "courtName": "5ce6d6628cb61b38141c7088",
 *      "courtSize": 5,
 *     "team": "5ce6d7ce8cb61b38141c708c",
 *       "matchDate": "2019-06-04T21:00:00.000Z",
 *      "price": 1245,
 *      "created": "2019-07-05T01:33:15.769Z",
 *      "updated": "2019-07-05T01:33:15.769Z",
 *      "__v": 0
 *  }
 *}
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/:id', wrapAsync(matchesController.getMatch));

/**
 * @api {get} /api/matches/Squad/:id Get Match By Squad
 * @apiName get
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "data": {
 *      "assistList": [],
 *      "playersA": [],
 *      "playersB": [],
 *      "subPlayersA": [],
 *      "subPlayersB": [],
 *      "_id": "5d1ea8db7b0dd00c27f1c3f0",
 *      "courtName": "5ce6d6628cb61b38141c7088",
 *      "courtSize": 5,
 *     "team": "5ce6d7ce8cb61b38141c708c",
 *       "matchDate": "2019-06-04T21:00:00.000Z",
 *      "price": 1245,
 *      "created": "2019-07-05T01:33:15.769Z",
 *      "updated": "2019-07-05T01:33:15.769Z",
 *      "__v": 0
 *  }
 *}
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/Squad/:id', wrapAsync(matchesController.squadId));

/**
 * @api {get} /api/matches/Court/:id Get Match By Court
 * @apiName get
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "data": {
 *      "assistList": [],
 *      "playersA": [],
 *      "playersB": [],
 *      "subPlayersA": [],
 *      "subPlayersB": [],
 *      "_id": "5d1ea8db7b0dd00c27f1c3f0",
 *      "courtName": "5ce6d6628cb61b38141c7088",
 *      "courtSize": 5,
 *     "team": "5ce6d7ce8cb61b38141c708c",
 *       "matchDate": "2019-06-04T21:00:00.000Z",
 *      "price": 1245,
 *      "created": "2019-07-05T01:33:15.769Z",
 *      "updated": "2019-07-05T01:33:15.769Z",
 *      "__v": 0
 *  }
 *}
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/Court/:id', wrapAsync(matchesController.courtId));

/**
 * @api {get} /api/matches/Date/a Get Match By Date
 * @apiName get
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiParamExample {json} Request-Example:
 *     {
 *       "matchDate": "2019-06-04T21:00:00.000Z"
 *     }
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "data": {
 *      "assistList": [],
 *      "playersA": [],
 *      "playersB": [],
 *      "subPlayersA": [],
 *      "subPlayersB": [],
 *      "_id": "5d1ea8db7b0dd00c27f1c3f0",
 *      "courtName": "5ce6d6628cb61b38141c7088",
 *      "courtSize": 5,
 *     "team": "5ce6d7ce8cb61b38141c708c",
 *       "matchDate": "2019-06-04T21:00:00.000Z",
 *      "price": 1245,
 *      "created": "2019-07-05T01:33:15.769Z",
 *      "updated": "2019-07-05T01:33:15.769Z",
 *      "__v": 0
 *  }
 *}
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/Date/:id', wrapAsync(matchesController.date));

/**
 * @api {patch} /api/matches/:id Update Match
 * @apiName update
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiParamExample {json} Request-Example:
 * {
 *      "courtName": "5ce55d5ffb4de31b5d06bcaf",
 *      "courtSize": 5,
 *      "team": "5ce55d5ffb4de31b5d06bcaf",
 *      "matchDate": "2019-06-01T18:00:00.0000",
 *      "price": "1245"
 *  }
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": {
 *            "success": true
 *           }
 * }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.patch('/matches/:id', wrapAsync(matchesController.updateById));

/**
 * @api {patch} /api/matches/:id/assistance Add User to Assist List
 * @apiName update
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiParamExample {json} Request-Example:
 * {
 *    "user" : "5ce55c2fdac9c81a9e4e75a2"
 * }
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": {
 *            "success": true
 *           }
 * }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.patch('/matches/:id/assistance', wrapAsync(matchesController.addToAssistList));

/**
 * @api {post} /api/matches/:id/createRandomTeams Create Random Teams
 * @apiName post
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiSuccessExample {json} Success-Response:
 *      {
 *        "data": {
 *            "assistList": [
 *                            "5ce55b832201ad1a2b38c94b",
 *                            "5ce55bd4dac9c81a9e4e759f",
 *                            "5ce55c11dac9c81a9e4e75a0",
 *                            "5ce55c20dac9c81a9e4e75a1",
 *                            "5ce55c48dac9c81a9e4e75a3",
 *                            "5ce55ecefb4de31b5d06bcb3",
 *                            "5ce6cde58cb61b38141c7070",
 *                            "5ce6ce1f8cb61b38141c7071",
 *                            "5ce6ce338cb61b38141c7072",
 *                            "5ce6ce9c8cb61b38141c7077"
 *                        ],
 *        "playersA": [
 *                        "5ce55c20dac9c81a9e4e75a1",
 *                        "5ce55bd4dac9c81a9e4e759f",
 *                        "5ce55c48dac9c81a9e4e75a3",
 *                        "5ce55ecefb4de31b5d06bcb3",
 *                        "5ce6ce9c8cb61b38141c7077"
 *                    ],
 *        "playersB": [
 *                        "5ce6cde58cb61b38141c7070",
 *                        "5ce6ce1f8cb61b38141c7071",
 *                        "5ce55c11dac9c81a9e4e75a0",
 *                        "5ce6ce338cb61b38141c7072",
 *                        "5ce55b832201ad1a2b38c94b"
 *                    ],
 *        "subPlayersA": [],
 *        "subPlayersB": [],
 *        "_id": "5d16e850e183c225276086be",
 *        "courtName": "5ce6d6598cb61b38141c7087",
 *        "courtSize": 5,
 *        "team": "5ce6d6b38cb61b38141c708b",
 *        "matchDate": "2019-06-01T21:00:00.000Z",
 *        "price": 1245,
 *        "created": "2019-06-29T04:25:52.213Z",
 *        "updated": "2019-06-29T04:25:52.213Z",
 *        "__v": 14
 *    }
 * }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.post('/:id/createRandomTeams/', wrapAsync(matchesController.createRandomTeams));

/**
 * @api {delete} /api/matches/:id Delete Match
 * @apiName delete
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": {
 *            "success": true
 *           }
 * }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.delete('/:id', wrapAsync(matchesController.delete));

/**
 * @api {delete} /api/matches/ Delete Match By Court And Date
 * @apiName delete
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiParamExample {json} Request-Example:
 *    {
 *      "courtName": "5ce6d6628cb61b38141c7088",
 *      "matchDate": "2019-06-02T21:00:00.000Z"
 *    }
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": {
 *            "success": true
 *           }
 * }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.delete('/', wrapAsync(matchesController.deleteByCourtAndDate));

/**
 * @api {patch} /api/matches/:id/pullUser Pull Out User of Match
 * @apiName update
 * @apiGroup Match
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {ObjectId} courtName name of the court
 * @apiParam {Number} courtSize size of the court
 * @apiParam {ObjectId} team squad that set up the match
 * @apiParam {Date} matchDate date of the match
 * @apiParam {ObjectId[]} assistList list of players that will assist
 * @apiParam {ObjectId[]} playersA players of one team
 * @apiParam {ObjectId[]} playersB players of another team
 * @apiParam {ObjectId[]} subPlayerA subtitution players for playersA
 * @apiParam {ObjectId[]} subPlayerB subtitution players for playersB
 * @apiParam {String} result score of the game
 * @apiParam {ObjectID} playerOfTheMatch Best player of the match
 * @apiParam {Number} price cost of the court rent
 * @apiParamExample {json} Request-Example:
 * {
 *    "user" : "5ce55c2fdac9c81a9e4e75a2"
 * }
 * @apiSuccessExample {json} Success-Response:
 * {
 *      {
 *          "data": "Success"
 *      }
 * }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.patch('/:id/pullUser', wrapAsync(matchesController.pullUserOfMatch));

module.exports = router;
