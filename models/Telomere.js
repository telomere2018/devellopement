var mongoose = require('mongoose');
var teloSchema = new mongoose.Schema({
	name : String,
	params : [String],
	date : { type : Date, default: Date.now },
	description: String,
	fileName : String,
	populations: [
		{
			type : mongoose.Schema.Types.ObjectId,
			ref: 'Population'
		}
				]
});




var Telomere = mongoose.model('Telomere', teloSchema);

module.exports = Telomere;