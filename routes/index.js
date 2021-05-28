var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gama Academy' });
});

/* GET store page. */
router.get('/store', function(req, res, next) {
  res.render('store', { title: 'Gama Academy' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Gama Academy' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Gama Academy' });
});

module.exports = router;
