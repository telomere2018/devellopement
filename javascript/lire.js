"use strict";

var lire = require('fs').readFile;
(function(){
readFile('P3-PL2.tx'), function(error, content){
    if(error)
    {console.log(error);
    return;}

    console.log(content);
        }
})();

