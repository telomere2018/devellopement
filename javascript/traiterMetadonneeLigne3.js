/*
   Demo of file copy to test node-readline
   Extension to Node.js
   2014 scriptol.com
   extends by georges 2018
*/  
"use strict";
alert('dans js');
var fs = require('fs');
var readline = require("./node-readline.js");
alert('dans js');
 function test(){
    alert('ça demarre');
var source="/home/shiny73/Desktop/P3-PL2.txt";
var target="/home/shiny73/Desktop/result.txt";

var r=readline.fopen(source,"r")
if(r===false)
{
   console.log("Error, can't open ", source)
   process.exit(1)
} 

var w = fs.openSync(target,"w");
var count=0;
do
{
      var line=readline.fgets(r)
      if(line != false && count!=4)
      {
        console.log(line)
        fs.writeSync(w, line + "\n", null, 'utf8')
        count+=1
      }
}
while (!readline.eof(r)&&count!=4)

readline.fclose(r)
fs.closeSync(w)

console.log(count, " lines read.")

/* End */
}


