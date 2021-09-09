var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Express' });
});
router.post('/register', function(req, res, next) {
  console.log(req.body);

 // res.render('auth/register', { title: 'Express' });
});

module.exports = router;
