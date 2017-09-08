var express = require('express');

var cors = require('cors');

var app = express();

app.use(cors());



app.get('/', function (req, res) {
    res.end('Servidor ON!');
});

app.get('/reservas', function (req, res) {
   res.json([
       {
           local : 'Centro',
           sala : 'Sala 1',
           dataInicio : '2017/08/10 12:50:35',
           dataFim : '2017/08/10 12:50:35',
           responsavel : 'Lucas',
           cafe : 'sim',
           descricao : 'Alugado para Reunião'
       },
       {
           local : 'Centro 2',
           sala : 'Sala 2',
           dataInicio : '2017/08/10 12:50:35',
           dataFim : '2017/08/10 12:50:35',
           responsavel : 'Lucas',
           cafe : 'não',
           descricao : 'Alugado para Reunião 2'
       },
       {
           local : 'Centro 3',
           sala : 'Sala  3',
           dataInicio : '2017/08/10 12:50:35',
           dataFim : '2017/08/10 12:50:35',
           responsavel : 'Lucas',
           cafe : 'sim',
           descricao : 'Alugado para Reunião 3'
       }
   ]);
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


app.listen(5000);
