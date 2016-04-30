var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');
var Event = require('../models/event').Event;

//Connecting to DB
mongoose.connect('mongodb://localhost/meetup');

//handles get requests
router.get('/create', function(req, res, next) {
  res.render('createForm', { title: 'Create Meet Up' });
});

//Handles post requests
router.post('/create', function(req, res, next) {

	//Creating an event object and saving it
	new Event({
		activity: req.body.activity,
		location: req.body.location,
		eventTime: req.body.eventTime,
		creator: req.body.creator
	}).save(function(err, prd){
		if(err)
			res.json(err);
		else
			res.redirect('/view/:event_id');
	});
	res.redirect('/view/:event_id');
});

module.exports = router;
