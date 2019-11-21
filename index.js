var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
 
var app = express();
app.use(bodyParser());
var router = express.Router();
app.use(express.static('public'));
app.use(router);

var port = process.env.PORT || 3000;

router.get("/",function(req,res){
 res.send("<h1>hello heroku node.js world</h1>");
});

http.createServer(app).listen(port, function(){
 console.log('server run');
});