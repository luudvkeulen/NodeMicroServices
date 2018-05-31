const express = require('express'),
    mongoose = require('mongoose'),
    Product = require('./api/models/product'),
    bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Products');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/productRoutes');
routes(app);

app.listen(port);

console.log('Magazine service started on port: ' + port);