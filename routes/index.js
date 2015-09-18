var express = require('express');
var beerModel = require('../models/beerModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	var beerLevel = beerModel.getPercentage();

  	res.render('index', { title: 'BeerDuino', percentage: beerLevel });
});

module.exports = router;