//Importa o mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reserva_de_salas');

//Conecta com o mongodb
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar o banco'));

//schemas do mongose
db.once('open', function () {

    //Schema de Reservas
    exports.Reserva = mongoose.model('Reserva', mongoose.Schema({
        local : {type: mongoose.Schema.Types.ObjectId, ref: 'Local'},
        sala : String,
        dataInicio : Date,
        dataFim : Date,
        responsavel : String,
        cafe : Boolean,
        quantidadePessoas : Number,
        descricao : String,
        criadoEm : Date
    }), 'Reservas');
});

db.once('open', function () {
    //Schema de Local
    exports.Local = mongoose.model('Local', mongoose.Schema({
        nome : String,
        criadoEm : Date
    }));
});

db.once('open', function () {
    //Schema de Sala
    exports.Sala = mongoose.model('Sala', mongoose.Schema({
        sala : String,
        criadoEm : Date
    }));
});
