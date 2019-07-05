const express = require('express'),
  router = express.Router(),
  { wrapAsync } = require('../app/utils'),
  userController = require('../app/controllers/usersController');

/**
 * @api {get} /api/users Get Users
 * @apiName get
 * @apiGroup User
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
 *        {
 *          "data": [
 *                    {
 *                        "_id": "5ce6ce1f8cb61b38141c7071",
 *                        "email": "nicolas.varela@outlook.com",
 *                        "username": "niko_varela10",
 *                        "password": "$2b$10$KI7Myxq3u.l5fddvg9rniuVkQtIFy98oyor/4jzsK5jn2cWSzxq8C",
 *                        "created": "2019-05-23T16:45:19.905Z",
 *                        "updated": "2019-05-23T16:45:19.905Z",
 *                        "__v": 0
 *                    },
 *                    {
 *                        "_id": "5ce55bd4dac9c81a9e4e759f",
 *                        "email": "hugoabbate@gmail.com",
 *                        "username": "hughabbate",
 *                        "password": "$2b$10$Kgk3gMNMeGS5Ns8PKOZr0OJ2ic4zzqMIlXb8P3BP/FXc7/Js.fYYW",
 *                        "created": "2019-05-22T14:25:24.116Z",
 *                        "updated": "2019-05-22T14:25:24.117Z",
 *                        "__v": 0
 *                    }
 *                  ]
 *     }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/', wrapAsync(userController.getAll));

/**
 * @api {put} /api/users/:id User SingUp
 * @apiName put
 * @apiGroup User
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiParamExample {json} Request-Example:
 *        {
 *          "email": "user32@outlook.com",
 *          "username": "User32",
 *          "password": "clave123"
 *        }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "data": {
 *              "_id": "5d1ed626f03ae2373cbc723a",
 *              "email": "user32@outlook.com",
 *              "username": "User32",
 *              "password": "$2b$10$Axuy7TJEoZlRov2IApGCAeQr2cFdCvUD6UDnW2JawrB0K811Pck66",
 *              "created": "2019-07-05T04:46:30.089Z",
 *              "updated": "2019-07-05T04:46:30.090Z",
 *              "__v": 0
 *          }
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.put('/signUp', wrapAsync(userController.signUp));

/**
 * @api {post} /api/users/:id User LogIn
 * @apiName post
 * @apiGroup User
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiParamExample {json} Request-Example:
 *        {
 *          "username": "User32",
 *          "password": "clave123"
 *        }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        {
 *            "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMWVkNjI2ZjAzYWUyMzczY2JjNzIzYSIsImlhdCI6MTU2MjMwMjE3MywiZXhwIjoxNTYyMzA5MzczfQ.35zK68gzZnaDV7Owvv35T4WgXOphowZn6bVQLm7H5Ek"
 *        }
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.post('/login', wrapAsync(userController.login));

/**
 * @api {get} /api/users/:id Get Users by Id
 * @apiName get
 * @apiGroup User
 * @apiParam {Date} created creation date
 * @apiParam {Date} updated update date
 * @apiParam {String} imageUrl url of Squad avatar
 * @apiParam {String} squadName name of the squad
 * @apiParam {String} password Password
 * @apiParam {ObjectId} courtName default court for the squad
 * @apiParam {ObjectId[]} users users in the squad
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "data": {
 *              "_id": "5d1ed626f03ae2373cbc723a",
 *              "email": "user32@outlook.com",
 *              "username": "User32",
 *              "password": "$2b$10$Axuy7TJEoZlRov2IApGCAeQr2cFdCvUD6UDnW2JawrB0K811Pck66",
 *              "created": "2019-07-05T04:46:30.089Z",
 *              "updated": "2019-07-05T04:46:30.090Z",
 *              "__v": 0
 *          }
 *      }
 * @apiVersion 1.0.0
 * @apiSuccess ok
 */
router.get('/:id', wrapAsync(userController.getById));

module.exports = router;
