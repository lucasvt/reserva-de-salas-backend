var app = require('./js/config/app-config.js');
var reservaController = require('./js/controllers/reservaController.js');

app.get('/locais', function (req, res) {
    res.json([
        'Florianópolis-SC / Aeroporto Hercílio Luz',
        'Curitiba-PR / Rodoferroviária de Curitiba',
        'Londrina-PR / Catuaí Shopping Center',
        'Balneário Camboriú-SC / Avenida Atlântica'
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
    reservaController.salva(reserva, function (reservaResponse) {
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


