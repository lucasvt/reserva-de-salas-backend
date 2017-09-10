var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(cors());
app.listen(5000);

module.exports = app;