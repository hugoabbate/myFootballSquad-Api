const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  courtsController = require('../app/controllers/courtsController');


/**
 * @api {put} /api/courts Create Courts
 * @apiName create
 * @apiGroup Court
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} courtName name of the court
 * @apiParam {Number[]} courtSize diferent size of courts
 * @apiParamExample {json} Request-Example:
 *     {
 *       "courtName": "Texas Futbol",
 *       "courtSize" : [5, 7]
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"data": {
 *        "courtSize": [
 *            5,
 *            7
 *            ],
 *        "_id": "5d1e9d7973d44266a5caa6fc",
 *        "courtName": "Texas Futbol",
 *        "created": "2019-07-05T00:44:41.740Z",
 *        "updated": "2019-07-05T00:44:41.740Z",
 *        "__v": 0
 * }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.put('/', wrapAsync(courtsController.create));

/**
 * @api {get} /api/courts Get Courts
 * @apiName get
 * @apiGroup Court
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} courtName name of the court
 * @apiParam {Number} courtSize diferent size of courts
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"data": {
 *        "courtSize": [
 *            5,
 *            7
 *            ],
 *        "_id": "5d1e9d7973d44266a5caa6fc",
 *        "courtName": "Texas Futbol",
 *        "created": "2019-07-05T00:44:41.740Z",
 *        "updated": "2019-07-05T00:44:41.740Z",
 *        "__v": 0
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/', wrapAsync(courtsController.getAll));

/**
 * @api {get} /api/courts/:id Get Courts By ID
 * @apiName get
 * @apiGroup Court
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} courtName name of the court
 * @apiParam {Number} courtSize diferent size of courts
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"data": {
 *        "courtSize": [
 *            5,
 *            7
 *            ],
 *        "_id": "5d1e9d7973d44266a5caa6fc",
 *        "courtName": "Texas Futbol",
 *        "created": "2019-07-05T00:44:41.740Z",
 *        "updated": "2019-07-05T00:44:41.740Z",
 *        "__v": 0
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/:id', wrapAsync(courtsController.byId));

/**
 * @api {patch} /api/courts/:id Update Court
 * @apiName get
 * @apiGroup Court
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} courtName name of the court
 * @apiParam {Number} courtSize diferent size of courts
 * @apiParamExample {json} Request-Example:
 *      {
 *        	"courtName": "Texass-Futbol"
 *      }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "data": {
 *                  "success": true
 *                }
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.patch('/:id', wrapAsync(courtsController.update));

/**
 * @api {delete} /api/courts/:id Delete Court
 * @apiName delete
 * @apiGroup Court
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} courtName name of the court
 * @apiParam {Number} courtSize diferent size of courts
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "data": {
 *                  "success": true
 *                }
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.delete('/:id', wrapAsync(courtsController.delete));

module.exports = router;
