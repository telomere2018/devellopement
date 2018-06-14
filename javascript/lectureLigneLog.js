"use strict";
var path = require ('path');
var nodeReadLines = require('./nodeReadLines');

function lectureLigneLog(adresse){
    var chemin = path.resolve(adresse);
    console.log(chemin + " chemin");
    nodeReadLines = new nodeReadLines(chemin);
    console.log(nodeReadLines.fopen +  "fopen");
     nodeReadLines.fopen('r');

    do
    {
   let line = nodeReadLines.fgets();

    console.log(line + line);

    }while(nodeReadLines.eof());
}

module.exports = lectureLigneLog;