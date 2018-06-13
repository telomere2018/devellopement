"use strict";
    function ok(){
        alert('ok');}

    function quelDatum(){
    var a = new Date();
    alert(" voici la date de jour: " + a.getDate());
    }


    (function(){
        alert('une fonction anonyme allo');
    })();
    var test= function(){
        alert('dans js');
    }