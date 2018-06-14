// Node Readline
// (c) 2014 Scriptol.com - License: Apache 2.0
// Compatibility: JavaScript standard

// Part of Scriptol.js module.

// Use it freely but keep this reference
"use strict";
var fs = require('fs');

 function nodeReadLines(path){


this._path=path;

var filePtr = {};
var fileBuffer = {};
var buffer = new Buffer(4096);
//pour le mode 'r' ou 'w'
this.fopen = function(mode) 
{
  this._handle = fs.openSync(this._path, mode)
  filePtr[this._handle] = 0
  fileBuffer[this._handle]= []
}

this.fclose = function() 
{
  fs.closeSync(this._handle)
  if (this._handle in filePtr) {
    delete filePtr[this._handle]
    delete fileBuffer[this._handle]
  }  
  return
}

this.fgets = function()
{    
  if(fileBuffer[this._handle].length == 0) 
  {
    var pos = filePtr[this._handle]
    var br = fs.readSync(this._handle, buffer, 0, 4096, pos)
    if(br < 4096) {
      delete filePtr[this._handle]
      if(br == 0)  return false;
    }
    var lst = buffer.slice(0, br).toString().split("\n")
    var minus = 0
    if(lst.length > 1) {
      var x = lst.pop()
      minus = x.length
    }   
    fileBuffer[this._handle] = lst  
    filePtr[this._handle] = pos + br - minus
  }
  //The shift() method removes the first element from an arra
  // and returns that removed element. 
  //This method changes the length of the array.
  return fileBuffer[this._handle].shift() ;      
}

this.fputs = function( data) 
{
  fs.writeSync(this._handle, data + "\n", null, 'utf8'); 
}

this.eof = function() {
  return (this._handle in filePtr) == false && (fileBuffer[this._handle].length == 0)  
}
}

module.exports = nodeReadLines;