var express = require('express');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/records');
var util = require('util');
var debug = require('debug')('my-application');
var app = express();

app.get('/', function (req, res) {
  var collection = db.get('notices');
  //res.send('Hello World!');
  collection.find({},{},function(e,docs){
        res.json(docs);
		//console.write(util.inspect(docs, false, null));
 });
});

app.get('/:id', function (req, res) {
  var collection = db.get('notices');
  //res.send('Hello World!');
  collection.find({},{limit :req.params.id , sort : { _id : 1 }},function(e,docs){
        res.json(docs);
		//console.write(util.inspect(docs, false, null));
 });
});

var server = app.listen(4000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
