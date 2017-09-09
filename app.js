var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

//Importa o mongoose e o conecta com o mongodb
var mongoose = require('mongoose').connect('mongodb://127.0.0.1/reserva_de_salas');
var db = mongoose.connection;


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

db.on('error', console.error.bind(console, 'Erro ao conectar o banco'));

db.once('open', function () {
    //Schema de Reservas
    Reserva = mongoose.model('Reserva', mongoose.Schema({
        local : Object,
        sala : String,
        dataInicio : Date,
        dataFim : Date,
        responsavel : String,
        cafe : Boolean,
        quantidadePessoas : Number,
        descricao : String,
        criadoEm : Date
    }));
});


app.get('/', function (req, res) {


});

app.get('/reservas', function (req, res) {
    Reserva.find({}, function (error, reservas) {
        if(error){
            res.json({error: 'Não foi pocivel retornar as reservas'})
        }else{
            res.json(reservas);
        }
    })
});

app.get('/locais', function (req, res) {
   res.json([
		{local :'Florianopolis', filial : 'Capoeiras'},
		{local :'Londrina', filial : 'Centro'},
		{local :'São José', filial : 'Kobrasol'}
	
    ]);
});

app.get('/salas', function (req, res) {
   res.json([
		'São José',
		'Joaquina',
		'Ingleses',
		'Jurerê'
    ]);
});

app.post('/reservas', function (req, res) {
    new Reserva({
            local : req.body.local,
            sala : req.body.sala,
            dataInicio : req.body.dataInicio,
            dataFim : req.body.dataFim,
            responsavel : req.body.responsavel,
            cafe : req.body.cafe,
            quantidadePessoas : req.body.quantidadePessoas,
            descricao : req.body.descricao,
            criadoEm : new Date(),
        }).save(function (error, reserva) {
            if(error){
                res.json({error: 'Não foi pocivel salvar a reserva'})
            }else{
                res.json(reserva);
            }
        });
   console.log(req.body);
});

app.put('/reservas', function (req, res) {

});

app.delete('/reservas', function (req, res) {

});

app.listen(5000);
