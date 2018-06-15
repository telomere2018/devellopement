"use strict";

//coté client pas de module
//gestion des évènement du formulaire d'insertion de fichier en base

var myForm = document.getElementById('myForm');

 // le premier paramètre est le type du champ de myform 

    myForm.addEventListener('submit', function(e) {

        alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');

        e.preventDefault();

    });