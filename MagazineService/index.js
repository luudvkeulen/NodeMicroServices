const express = require('express'),
    mongoose = require('mongoose'),
    Price = require('./api/models/price'),
    bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Prices');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/priceRoutes');
routes(app);

app.listen(port);

console.log('Pricing service started on port: ' + port);