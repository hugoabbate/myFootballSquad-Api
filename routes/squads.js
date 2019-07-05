const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  squadsController = require('../app/controllers/squadsController');

/**
 * @api {put} /api/squads Create Squad
 * @apiName create
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiParamExample {json} Request-Example:
 *     {
 *        "squadName": "The Demons",
 *        "password": "clave123",
 *        "courtName": "5ce6d66c8cb61b38141c7089",
 *        "users" : ["5ce6cef58cb61b38141c7079",
 *                  "5ce6cf318cb61b38141c707b",
 *                  "5ce6cf458cb61b38141c707c",
 *                  "5ce6cf518cb61b38141c707d",
 *                  "5ce6d19a8cb61b38141c707e",
 *                  "5ce6d1ad8cb61b38141c707f",
 *                  "5ce6d1fc8cb61b38141c7080",
 *                  "5ce6d2228cb61b38141c7081",
 *                  "5ce6d2418cb61b38141c7082",
 *                  "5ce6d24f8cb61b38141c7083",
 *                  "5ce6d2a78cb61b38141c7085",
 *                  "5ce6d2b68cb61b38141c7086"]
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"data": {
 *                "users" : ["5ce6cef58cb61b38141c7079",
 *                           "5ce6cf318cb61b38141c707b",
 *                           "5ce6cf458cb61b38141c707c",
 *                           "5ce6cf518cb61b38141c707d",
 *                           "5ce6d19a8cb61b38141c707e",
 *                           "5ce6d1ad8cb61b38141c707f",
 *                           "5ce6d1fc8cb61b38141c7080",
 *                           "5ce6d2228cb61b38141c7081",
 *                           "5ce6d2418cb61b38141c7082",
 *                           "5ce6d24f8cb61b38141c7083",
 *                           "5ce6d2a78cb61b38141c7085",
 *                           "5ce6d2b68cb61b38141c7086"]
 *                "_id": "5d1eca81252c4d1d44fc9745",
 *                "squadName": "The Demons",
 *                "password": "$2b$10$ve.8VEuO1JuK74.eeBoTXeDJzCQhOYLtwvtwHU9OhHjXDSwWGUFoy",
 *                "courtName": "5ce6d66c8cb61b38141c7089",
 *                "created": "2019-07-05T03:56:49.447Z",
 *                "updated": "2019-07-05T03:56:49.448Z",
 *                "__v": 0
 *               }
 *     }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.put('/', wrapAsync(squadsController.create));

/**
 * @api {get} /api/squads Get Squads
 * @apiName get
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "data":
 *         {
 *            "users": [
 *                {
 *                    "_id": "5ce6cef58cb61b38141c7079",
 *                    "username": "Nicolas.Maillo"
 *                },
 *                {
 *                    "_id": "5ce6cf088cb61b38141c707a",
 *                    "username": "mbotana"
 *                },
 *                {
 *                    "_id": "5ce6cf318cb61b38141c707b",
 *                    "username": "mati_leyes"
 *                },
 *                {
 *                    "_id": "5ce6cf458cb61b38141c707c",
 *                    "username": "Gaston_Abbate"
 *                },
 *                {
 *                    "_id": "5ce6cf518cb61b38141c707d",
 *                    "username": "Axx"
 *                },
 *                {
 *                    "_id": "5ce6d19a8cb61b38141c707e",
 *                    "username": "P4li"
 *                },
 *                {
 *                    "_id": "5ce6d1ad8cb61b38141c707f",
 *                    "username": "LeoQ"
 *                },
 *                {
 *                    "_id": "5ce6d1fc8cb61b38141c7080",
 *                    "username": "Fr4nc0"
 *                },
 *                {
 *                    "_id": "5ce6d2228cb61b38141c7081",
 *                    "username": "Ale1431"
 *                },
 *                {
 *                    "_id": "5ce6d2418cb61b38141c7082",
 *                    "username": "MauroOrell"
 *                },
 *                {
 *                    "_id": "5ce6d24f8cb61b38141c7083",
 *                    "username": "Pipa_Gomez"
 *                },
 *                {
 *                    "_id": "5ce6d2a78cb61b38141c7085",
 *                    "username": "NahueLinera"
 *                },
 *                {
 *                    "_id": "5ce6d2b68cb61b38141c7086",
 *                    "username": "User30"
 *                }
 *            ],
 *            "_id": "5d1928eee852db15339a782b",
 *            "squadName": "The Vaquers",
 *            "password": "$2b$10$UeBLnEvprXmkQfwTfPm0zeRixUIHzFS6uMWes5zd2aOyPNHA3tHRK",
 *            "courtName": {
 *                "_id": "5ce6d66c8cb61b38141c7089",
 *                "courtName": "Solanas"
 *            },
 *            "created": "2019-06-30T21:26:06.347Z",
 *            "updated": "2019-06-30T21:26:06.347Z",
 *            "__v": 0
 *        },
 *        {
 *            "users": [
 *                {
 *                    "_id": "5ce6cef58cb61b38141c7079",
 *                    "username": "Nicolas.Maillo"
 *                },
 *                {
 *                    "_id": "5ce6cf318cb61b38141c707b",
 *                    "username": "mati_leyes"
 *                },
 *                {
 *                    "_id": "5ce6cf458cb61b38141c707c",
 *                    "username": "Gaston_Abbate"
 *                },
 *                {
 *                    "_id": "5ce6cf518cb61b38141c707d",
 *                    "username": "Axx"
 *                },
 *                {
 *                    "_id": "5ce6d19a8cb61b38141c707e",
 *                    "username": "P4li"
 *                },
 *                {
 *                    "_id": "5ce6d1ad8cb61b38141c707f",
 *                    "username": "LeoQ"
 *                },
 *                {
 *                    "_id": "5ce6d1fc8cb61b38141c7080",
 *                    "username": "Fr4nc0"
 *                },
 *                {
 *                    "_id": "5ce6d2228cb61b38141c7081",
 *                    "username": "Ale1431"
 *                },
 *                {
 *                    "_id": "5ce6d2418cb61b38141c7082",
 *                    "username": "MauroOrell"
 *                },
 *                {
 *                    "_id": "5ce6d24f8cb61b38141c7083",
 *                    "username": "Pipa_Gomez"
 *                },
 *                {
 *                    "_id": "5ce6d2a78cb61b38141c7085",
 *                    "username": "NahueLinera"
 *                },
 *                {
 *                    "_id": "5ce6d2b68cb61b38141c7086",
 *                    "username": "User30"
 *                }
 *            ],
 *            "_id": "5d1eca81252c4d1d44fc9745",
 *            "squadName": "The Demons",
 *            "password": "$2b$10$ve.8VEuO1JuK74.eeBoTXeDJzCQhOYLtwvtwHU9OhHjXDSwWGUFoy",
 *            "courtName": {
 *                "_id": "5ce6d66c8cb61b38141c7089",
 *                "courtName": "Solanas"
 *            },
 *            "created": "2019-07-05T03:56:49.447Z",
 *            "updated": "2019-07-05T03:56:49.448Z",
 *            "__v": 0
 *      }
 *    }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/', wrapAsync(squadsController.getAll));

/**
 * @api {get} /api/squads/:id Get Squads By Id
 * @apiName get
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiParamExample {json} Request-Example:
 *        {
 *          "password": "clave123"
 *        }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "data":
 *        {
 *            "users": [
 *                {
 *                    "_id": "5ce6cef58cb61b38141c7079",
 *                    "username": "Nicolas.Maillo"
 *                },
 *                {
 *                    "_id": "5ce6cf318cb61b38141c707b",
 *                    "username": "mati_leyes"
 *                },
 *                {
 *                    "_id": "5ce6cf458cb61b38141c707c",
 *                    "username": "Gaston_Abbate"
 *                },
 *                {
 *                    "_id": "5ce6cf518cb61b38141c707d",
 *                    "username": "Axx"
 *                },
 *                {
 *                    "_id": "5ce6d19a8cb61b38141c707e",
 *                    "username": "P4li"
 *                },
 *                {
 *                    "_id": "5ce6d1ad8cb61b38141c707f",
 *                    "username": "LeoQ"
 *                },
 *                {
 *                    "_id": "5ce6d1fc8cb61b38141c7080",
 *                    "username": "Fr4nc0"
 *                },
 *                {
 *                    "_id": "5ce6d2228cb61b38141c7081",
 *                    "username": "Ale1431"
 *                },
 *                {
 *                    "_id": "5ce6d2418cb61b38141c7082",
 *                    "username": "MauroOrell"
 *                },
 *                {
 *                    "_id": "5ce6d24f8cb61b38141c7083",
 *                    "username": "Pipa_Gomez"
 *                },
 *                {
 *                    "_id": "5ce6d2a78cb61b38141c7085",
 *                    "username": "NahueLinera"
 *                },
 *                {
 *                    "_id": "5ce6d2b68cb61b38141c7086",
 *                    "username": "User30"
 *                }
 *            ],
 *            "_id": "5d1eca81252c4d1d44fc9745",
 *            "squadName": "The Demons",
 *            "password": "$2b$10$ve.8VEuO1JuK74.eeBoTXeDJzCQhOYLtwvtwHU9OhHjXDSwWGUFoy",
 *            "courtName": {
 *                "_id": "5ce6d66c8cb61b38141c7089",
 *                "courtName": "Solanas"
 *            },
 *            "created": "2019-07-05T03:56:49.447Z",
 *            "updated": "2019-07-05T03:56:49.448Z",
 *            "__v": 0
 *      }
 *    }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/:id', wrapAsync(squadsController.getById));

/**
 * @api {patch} /api/squads/:id Update Squad
 * @apiName patch
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiParamExample {json} Request-Example:
 *    {
 *      "squadName": "C.A. River Plate",
 *      "courtName": "5ce55d30fb4de31b5d06bcad"
 *    }
 * @apiSuccessExample {json} Success-Response:
 *    {
 *      "data": {
 *                "success": true
 *              }
 *    }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.patch('/:id', wrapAsync(squadsController.update));

/**
 * @api {get} /api/squads/byUser/:id Get Squad By UserId
 * @apiName get
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiSuccessExample {json} Success-Response:
 *    {
 *    "data": [
 *              {
 *                  "users": [
 *                      {
 *                          "_id": "5ce55bd4dac9c81a9e4e759f",
 *                          "username": "hughabbate"
 *                      },
 *                      {
 *                          "_id": "5ce55c11dac9c81a9e4e75a0",
 *                          "username": "matu_vdp"
 *                      },
 *                      {
 *                          "_id": "5ce55c20dac9c81a9e4e75a1",
 *                          "username": "eze_rasche"
 *                      },
 *                      {
 *                          "_id": "5ce55c2fdac9c81a9e4e75a2",
 *                          "username": "choborra_gabi"
 *                      },
 *                      {
 *                          "_id": "5ce55c48dac9c81a9e4e75a3",
 *                          "username": "cuervode3ojos"
 *                      },
 *                      {
 *                          "_id": "5ce55ecefb4de31b5d06bcb3",
 *                          "username": "fpalat"
 *                      },
 *                      {
 *                          "_id": "5ce6cde58cb61b38141c7070",
 *                          "username": "christian_mata"
 *                      },
 *                      {
 *                          "_id": "5ce6ce1f8cb61b38141c7071",
 *                          "username": "niko_varela10"
 *                      },
 *                      {
 *                          "_id": "5ce6ce338cb61b38141c7072",
 *                          "username": "gpinto"
 *                      },
 *                      {
 *                          "_id": "5ce6ce468cb61b38141c7073",
 *                          "username": "Ez3_Ligorria"
 *                      },
 *                      {
 *                          "_id": "5ce6ce5e8cb61b38141c7074",
 *                          "username": "adriligorria"
 *                      },
 *                      {
 *                          "_id": "5ce6ce7a8cb61b38141c7075",
 *                          "username": "Pericl3s"
 *                      },
 *                      {
 *                          "_id": "5ce6ce8b8cb61b38141c7076",
 *                          "username": "MauMajul"
 *                      },
 *                      {
 *                          "_id": "5ce6ce9c8cb61b38141c7077",
 *                          "username": "DiegaMurua"
 *                      }
 *                  ],
 *                  "_id": "5ce6d6b38cb61b38141c708b",
 *                  "squadName": "A Lo Profundo",
 *                  "password": "$2b$10$ocLCE53knmYjqyzTSVNZsuIYiied6D.Uy4HWpnyKBfoTkU4slr1uG",
 *                  "courtName": {
 *                      "_id": "5ce6d6598cb61b38141c7087",
 *                      "courtName": "Comunicaciones"
 *                  },
 *                  "created": "2019-05-23T17:21:55.988Z",
 *                  "updated": "2019-07-01T23:26:16.615Z",
 *                  "__v": 1
 *              }
 *          ]
 *    }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/byUser/:id', wrapAsync(squadsController.byUserId));

/**
 * @api {delete} /api/squads/:id Delete Squads By Id
 * @apiName delete
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "data":
 *        {
 *      "success": true
 *        }
 *    }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.delete('/:id', wrapAsync(squadsController.delete));

/**
 * @api {delete} /api/squads/userInSquad/:id Delete User In Squads
 * @apiName delete
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      {
 *          "data": {
 *              "n": 4,
 *              "nModified": 3,
 *              "opTime": {
 *                  "ts": "6710032453127372803",
 *                  "t": 5
 *              },
 *              "electionId": "7fffffff0000000000000005",
 *              "ok": 1,
 *              "operationTime": "6710032453127372803",
 *              "$clusterTime": {
 *                  "clusterTime": "6710032453127372803",
 *                  "signature": {
 *                      "hash": "6eBBXwEmfetPNmboGPwbhbT8t60=",
 *                      "keyId": "6662588762612039681"
 *                  }
 *              }
 *          }
 *      }
 *    }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.delete('/userInSquads/:id', wrapAsync(squadsController.userInSquads));

/**
 * @api {delete} /api/squads/:id/deleteUser Delete User In Squads
 * @apiName delete
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiParamExample {json} Request-Example:
 * {
 *	"user": "5ce6ce338cb61b38141c7072"
 * }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
 *            "data": "Success"
 *        }
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.delete('/:id/deleteUser', wrapAsync(squadsController.deleteUser));

/**
 * @api {patch} /api/squads/addUser/:id Add User in A Squad
 * @apiName patch
 * @apiGroup Squad
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiParamExample {json} Request-Example:
 *    {
 *    	"users" : ["5ce55c11dac9c81a9e4e75a0"]
 *    }
 * @apiSuccessExample {json} Success-Response:
 *    {
 *      "data": {
 *                "success": true
 *              }
 *    }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.patch('/addUser/:id', wrapAsync(squadsController.addUser));


module.exports = router;
