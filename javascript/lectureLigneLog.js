"use strict";
var path = require ('path');
var nodeReadLines = require('./nodeReadLines');

function lectureLigneLog(adresse, nombre){
    var chemin = path.resolve(adresse);
    console.log(chemin + " chemin");
    nodeReadLines = new nodeReadLines(chemin);
    console.log(nodeReadLines.fopen +  "fopen");
     nodeReadLines.fopen('r');
var count = 0;
var tab = [];
    do
    {
   let line = nodeReadLines.fgets();
  
   var re = /\s+/;
   var lineString=line.toString(line);
   var nameList = lineString.split(re);
   //console.log(nameList + " = nameliste");
        tab.push(nameList);
    
        count++;
    }while(count<nombre&&(!nodeReadLines.eof()));
    console.log(tab + "tablier  tutut\n");
    for(let i = 0;i<tab.length;i++)
    {   var res = tab[i];
        console.log(typeof(res));
        for(let j = 0;j<res.length;j++)
        {
        console.log("tab" +i+"\n montab[" + j + "] \n" + res[j]);
        }
    }
   
}


module.exports = lectureLigneLog;