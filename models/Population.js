var mongoose = require('mongoose');

var populationSchema = new mongoose.Schema({
	name: String,
	date: Date
});
telomeres: [
	{
		telomere: mongoose.Schema.ObjectId,
		ref: 'Telomere'
	}
]

var Population = mongoose.model('Population', populationSchema);

module.exports = Population;