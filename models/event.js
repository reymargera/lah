var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	activity: String,
	location: String, 
	eventTime: Date,
	var creator = String
});

var Event = mongoose.model('Event', eventSchema);

module.exports = {
	Event: Event
}