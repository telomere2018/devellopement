"use strict";

//coté client pas de module
//gestion des évènement du formulaire d'insertion de fichier en base

var myForm = document.getElementById('myForm');

 // le premier paramètre est le type du champ de myform 

    myForm.addEventListener('submit', function(e) {

        alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');

        e.preventDefault();

    });

    document.getElementById("courriel").addEventListener("blur", function (e) {

        // Correspond à une chaîne de la forme xxx@yyy.zzz
    
        var regexCourriel = /.+@.+\..+/;
    
        var validiteCourriel = "";
    
        if (!regexCourriel.test(e.target.value)) {
    
            validiteCourriel = "Adresse invalide";
    
        }
    
        document.getElementById("aideCourriel").textContent = validiteCourriel;
    
    });
    document.querySelector('#file').addEventListener('change', function() {


        // Du code…
    alert(this.files[0].name);
    
    });