var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');
var Event = require('../models/event').Event;

//Connecting to DB
mongoose.connect('mongodb://localhost/meetup');

//handles get requests
router.get('/search', function(req, res, next) {
  res.render('createForm', { title: 'Create Meet Up' });
});

router.post('/search', function(){
	Event.find({}, function(err, events){
		console.log(events);
	});
});

module.exports = router;
