var router = require('express').Router();

var Telomere = require('./../models/Telomere.js');
var Population = require('./../models/Population.js');


router.get('/', (req, res) => {
  Population.find({}).populate('telomeres').then(populations =>{
	res.render('./../views/afficheLesPopulations.html', {populations: populations});
	});
});


router.get('/new', (req, res) => {
	res.render('./../views/chargerFichier.html');
});

router.get('/edit/:id', (req, res) => {

	
	Type.find({}).then(types => {
 	 Population.findById(req.params.id).populate('telomeres').then(population => {
		res.render('./../views/telomeres/edit.html', {population: population, telomere,telomere, endpoint: '/' + population._id.toString()});
	})},
		error => res.statu(500).send(err));
});

router.get('/delete/:id', (req, res) => {
	telomere.findOneAndRemove({_id: req.params.id}).then(() => {
		 res.redirect('/');
	});
});




router.get('/:id', (req, res) =>{	
	Population.findById(req.params.id).populate('telomeres').then(population => {
		res.render('./../views/afficheUnePopulation.html', {population: population});
	},	
	err => res.status(400).send(err));
});
router.post('/:id?',(req,res) => {
	new Promise((resolve,reject) => {
	if(req.params.id){
	Telomere.findById(req.params.id).then(resolve, reject);
	}else{
	resolve(new Telomere());
	}

	}).then(telomere => {
	telomere.name = req.body.name;
	telomere.description = req.body.description;
	telomere.number = req.body.number;
	telomere.types = req.body.types;

	if(req.file) {telomere.pictures = req.file.filename};

	return telomere.save();
	}).then(() => {
	res.redirect('/');
	}), err => console.log(err);
});


module.exports = router;
