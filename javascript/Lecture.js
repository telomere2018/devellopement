"use-strict";
const path = require('path');
const fs = require('fs');


 function Lecture(nameFile){

        this._nameFile = path.resolve(nameFile);
        if(path.extname(nameFile) !== '.json'){
            this._nameFile +='.json';
            console.log ("nouvelle extention " + this._nameFile);
        }
   

     this.lire = function()
    {
        var stream = fs.createReadStream(this._nameFile);
        stream.on('data', function(data){
            console.log("donnée reçu",data);
        });
        stream.on('end', function(){
            console.log('le flux c\'est bien terminé');
        });
    }
}
module.exports = Lecture;