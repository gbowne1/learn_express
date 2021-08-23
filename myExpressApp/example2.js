var express = require('express');
const path = require('path');
var app = express();
var PORT = 3000;
 
// With middleware
app.use('/', function(req, res, next){
   res.send({"name":"GeeksforGeeks"});
   next();
});
 
app.get('/', function(req, res){
    console.log("Body Sent")
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});