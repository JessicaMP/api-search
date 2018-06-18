const cors = require('cors');
const express = require('express'),
  app = express(),
  port = process.env.PORT || 7000,
  mongoose = require('mongoose'),
  Product = require('./api-search/model/modelSearch'), //created model loading here
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Productdb');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const routes = require('./api-search/routes/routesSearch'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);