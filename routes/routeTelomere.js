var router = require('express').Router();
const fs = require('fs');
const path = require('path');
var Lecture = require('./../javascript/Lecture');
var Telomere = require('./../models/Telomere.js');
var Population = require('./../models/Population.js');
var log = require('./../javascript/lectureLigneLog');
//ici on teste la lecture du fichier et le découpage en paramètre
console.log(log + " log");
var nombre = 3;
log = new log("fichier/P3-PL2.txt", 3);
//var fichierLire = new Lecture("fichier/P3-PL2.txt");
//console.log('fichierlire : ' + fichierLire);

//ici je teste

//console.log(fichierLire.lire() + " <= lire");
//console.log(Lecture.lire());


Telomere.find({"name":"paul"}).count().then(how=>{
    console.log("find filename paul ? " + how);
});

router.get('/', (req, res) => {
    
    Population.find({}).then(populations =>{
        console.log(" new test " +populations);
      res.render('./../views/afficheLesPopulations.html', {populations: populations});
      });
  });
  router.get('/test', (req, res) => {
    Population.find({}).then(populations =>{
      res.render('./../views/testJS.html');
      });
  });


router.get('/new', (req, res) => {
    console.log(Lecture + " new");
   telomere = new Telomere();
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


router.get('exist',(req,res) =>{
res.send("ce fichier existe déjà");
});

router.get('/unePopulation/:id', (req, res) =>{	
	Population.findById(req.params.id).populate('telomeres').then(population => {
		res.render('./../views/afficheUnePopulation.html', {population: population});
	},	
	err => res.status(400).send(err));
});
router.get('/populationsDUnFichier/:id', (req, res) =>{	
	Telomere.findById(req.params.id).populate('populations').then(telomere => {
		res.render('./../views/afficheLesPopDUnFichier.html', {telomere: telomere});
	},	
	err => res.status(400).send(err));
});


//le ? après id veut dire que c'est un paramètre optionnel 
router.post('/:id?',(req,res) => {
    
	new Promise((resolve,reject) => {
	if(req.params.id){console.log(req.params);
    Telomere.findById(req.params.id).then(resolve, reject);
    console.log("on arG");
	}else{   
    resolve(new Telomere());
    console.log("new Telomere");
	}
    
	}).then(telomere => {
        console.log(req.body.fileName + " coté requete \n");
        
        
    if(!Telomere.find(req.body.filename))
    {
     res.redirect('/exist');
    }
	telomere.name = req.body.fileName;
	
    telomere.params = req.body.params;
    telomere.date = req.body.date;
    telomere.description = req.body.description;
        console.log(req.body);
	if(req.file) {
        
        telomere.fileName = req.file.filename;
       
    };

	return telomere.save();
	}).then(() => {
	res.redirect('/');
	}), err => console.log(err);
});


module.exports = router;
