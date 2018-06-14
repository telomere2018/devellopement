"use strict";
const path=require ('path');
const fs = resuire('fs');

const Promisee = require ('bluebird');

const readFilePromise = Promise.promisify(fs.readfile);

Class LectureFichier{

 constructor(nomFichier){
     this._nomFicher = nomFichier;
     this._nomFichier = path.resolve(nomFichier);
 }
laTroisiemeLigne(tableau){
    return readFilePromise(this._nomFichier,'utf_)')
    .then(data => {
        const
    })
}

}