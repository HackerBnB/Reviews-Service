require('newrelic');

const express = require('express');
const path = require('path');
const routes = require('./../routes');
var bodyParser = require('body-parser');

// var cluster = require('cluster');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// if (cluster.isMaster) {
//  const cpuCount = require('os').cpus().length;
//  for (let i = 0; i < cpuCount; i += 1) {
//    cluster.fork();
//  }
// } else {

app.set('port', process.env.PORT || 3002);

app.get('/', (req, res) => {
  res.redirect('/rooms/1');
});

app.post('/', (req, res) => {
  res.redirect('/rooms/1');
});

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.get('/rooms/:roomId', (req, res) => {
  const reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});


app.use('/api', routes);

// }
module.exports = app;

// 
