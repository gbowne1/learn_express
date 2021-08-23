var express = require('express');
var app = express();
var PORT = 3000;
 
// Without middleware
app.get('/', function(req, res){
    res.send({ title: 'GeeksforGeeks' });
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});