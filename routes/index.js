const express = require('express'),
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Hola' });
});

router.get('/login', (req, res, next) => {
  res.render('./users/login', {});
});

// router.get('/', (req, res, next) => {
//   res.send({ title: 'Express Hola' });
// });

module.exports = router;
