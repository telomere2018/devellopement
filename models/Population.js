var mongoose = require('mongoose');

var populationSchema = new mongoose.Schema({
	name: String,
	date: { type : Date, default :Date.now },
	description : String,

telomeres: [
	{
		type : mongoose.Schema.Types.ObjectId,
		ref: 'Telomere'
	}
			],
telomeresBis : [
	{ id : String }
				]
});
var Population = mongoose.model('Population', populationSchema);

module.exports = Population;