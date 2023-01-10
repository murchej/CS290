/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Joseph Murche
 * Email: murchej@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var express_hndlebar = require('express_handlebars');
var app = express();
var port = process.env.PORT || 3000;
var twitData = require('./twitData');

console.log("== twitData", twitData);

app.engine('handlebars', express_hndlebar({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next){

  res.status(200).render('twitBody', {"twits": twitData, "display": true});

});


app.use(express.static('public'));

app.get('*', function (req, res) {
  
  res.status(404).render('404Body');

});


app.listen(port, function (error) {

  if(error){

    throw error;
  }
 
  console.log("== Server is listening on port", port);

});


app.get('/twits/:n', function(req, res, next) {
  
  var num = req.params.n;
  
  if(twitData[num]){
    
    console.log("== twitSpec", twitData[num]);
    
    var twitArr = [twitData[num]];
    
    res.status(200).render('twitBody',{"twits":twitArr, "display": false});

  }
  else{
    
    res.status(404).render('404Body');
    
  }

});
