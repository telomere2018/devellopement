var mongoose = require('mongoose');
var teloSchema = new mongoose.Schema({
	name : String,
	params : [String],
	date : { type : Date, default: Date.now },
	description: String
});

teloSchema.virtual('population', {
	ref: 'Population',
	localField: '_id',
	foreignField: 'telomeres'
});

var Telomere = mongoose.model('Telomere', teloSchema);

module.exports = Telomere;