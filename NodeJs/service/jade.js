var jade = require('jade');
// var express = require('express');
var express = require('express');

var str = jade.renderFile('./www/jade/1.jade',{pretty:true});

console.log(str)