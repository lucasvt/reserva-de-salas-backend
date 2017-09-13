var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());

// BODY PARSER CONVERTE OS DADOS EM JSON PARA RETORNO
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.listen(5000);

module.exports = app;