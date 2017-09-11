var app = require('./js/config/app-config.js');
var reservaController = require('./js/controllers/reservaController.js');
var localController = require('./js/controllers/localController.js');

app.get('/reservas', function (req, res) {

   reservaController.buscaTodos(function (reservaResponse) {
       res.json(reservaResponse);
   });
});

app.get('/reservas/:id', function (req, res) {
    var id = req.params.id;
    reservaController.buscaPorId(id, function (reservaResponse) {
        res.json(reservaResponse);
    });
});

app.post('/reservas', function (req, res) {
    var reserva = req.body;
    reservaController.consulta(consulta, function (reservaResponse) {
        res.json(reservaResponse);
    });
});

app.put('/reservas', function (req, res) {
    var reserva = req.body;
    reservaController.atualiza(reserva, function (reservaResponse) {
        res.json(reservaResponse);
    });
});

app.delete('/reservas/:id', function (req, res) {
    var id = req.params.id;
    reservaController.deleta(id, function (reservaResponse) {
        res.json(reservaResponse);
    })
});

app.get('/locais', function (req, res) {
    localController.buscaTodos(function(localResponse) {
        console.log(localResponse);
        res.json(localResponse);
    });
});


