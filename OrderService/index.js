const express = require('express'),
    mongoose = require('mongoose'),
    Order = require('./api/models/order'),
    bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8282;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Orders');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/orderRoutes');
routes(app);

app.listen(port);

console.log('Order service started on port: ' + port);