// Node Readline
// (c) 2014 Scriptol.com - License: Apache 2.0
// Compatibility: JavaScript standard

// Part of Scriptol.js module.

// Use it freely but keep this reference
"use strict";
var fs = require('fs');

var filePtr = {}
var fileBuffer = {}
var buffer = new Buffer(4096)
//pour le mode 'r' ou 'w'
exports.fopen = function(path, mode) 
{
  var handle = fs.openSync(path, mode)
  filePtr[handle] = 0
  fileBuffer[handle]= []
  return handle
}

exports.fclose = function(handle) 
{
  fs.closeSync(handle)
  if (handle in filePtr) {
    delete filePtr[handle]
    delete fileBuffer[handle]
  }  
  return
}

exports.fgets = function(handle)
{    
  if(fileBuffer[handle].length == 0) 
  {
    var pos = filePtr[handle]
    var br = fs.readSync(handle, buffer, 0, 4096, pos)
    if(br < 4096) {
      delete filePtr[handle]
      if(br == 0)  return false;
    }
    var lst = buffer.slice(0, br).toString().split("\n")
    var minus = 0
    if(lst.length > 1) {
      var x = lst.pop()
      minus = x.length
    }   
    fileBuffer[handle] = lst  
    filePtr[handle] = pos + br - minus
  }
  //The shift() method removes the first element from an arra
  // and returns that removed element. 
  //This method changes the length of the array.
  return fileBuffer[handle].shift()       
}

exports.fputs = function(handle, data) 
{
  fs.writeSync(handle, data + "\n", null, 'utf8'); 
}

exports.eof = function(handle) {
  return (handle in filePtr) == false && (fileBuffer[handle].length == 0)  
}