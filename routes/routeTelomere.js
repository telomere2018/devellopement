var router = require('express').Router();

var Telomere = require('./../models/Telomere.js');
var Population = require('./../models/Population.js');


router.get('/', (req, res) => {
  Population.find({}).then(populations =>{
	res.render('./../views/afficheLesPopulations.html', {populations: populations});
	});
});


router.get('/new', (req, res) => {
    var telomere = new Telomere();
	res.render('./../views/chargerModifierFichier.html', { telomere : telomere, endpoint : '/' });
});

router.get('/edit/:id', (req, res) => {

	
	T.find({}).then(types => {
 	 Population.findById(req.params.id).populate('telomeres').then(population => {
		res.render('./../views/chargerModifierFichier.html', {population : population, telomere,telomere, endpoint : '/' });
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
//le ? après id veut dire que c'est un paramètre optionnel 
router.post('/:id?',(req,res) => {
    
	new Promise((resolve,reject) => {
	if(req.params.id){console.log(req.params);
    Telomere.findById(req.params.id).then(resolve, reject);
    console.log("on arGgggggggggggggggggggggggGr");
	}else{   
    resolve(new Telomere());
    console.log("new Telomere");
	}
    
	}).then(telomere => {
        
	telomere.name = req.body.name;
	
    telomere.params = req.body.params;
    telomere.date = req.body.date;
    telomere.description = req.body.description;
        console.log(req.body);
	if(req.file) {telomere.fileName = req.file.filename};

	return telomere.save();
	}).then(() => {
	res.redirect('/');
	}), err => console.log(err);
});


module.exports = router;
