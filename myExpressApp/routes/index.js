"use strict"

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res) => {
  res.send('Hello World, This is home router');
});

router.get('/profile', (req, res) => {
  res.send('Hello World, This is profile router')
});

router.get('/login', (req, res) => {
  res.send('Hello World, This is login router');
});

router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router');
});

app.use('/', router);

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.listen(process.env.port || 3000);

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!')
});

console.log('Web Server is listening at port ' + (process.env.port || 3000));

module.exports = router;
