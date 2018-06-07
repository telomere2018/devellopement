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



/*teloSchema.virtual('populations', {
	ref: 'Population',
	localField: '_id',
	foreignField: 'telomeres'
}),*/


var Population = mongoose.model('Population', populationSchema);

module.exports = Population;