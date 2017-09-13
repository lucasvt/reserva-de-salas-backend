// IMPORTA O MONGOOSE
var mongoose = require('mongoose');

// CONECTA COM O BD MONGODB USANDO MONGOOSE
mongoose.connect('mongodb://127.0.0.1/reserva_de_salas');
var db = mongoose.connection;

// TRATAMENTO DE ERRO DE CONEXÃO
db.on('error', console.error.bind(console, 'Erro ao conectar o banco'));

// SCHEMAS DO MONGODB
db.once('open', function () {

    // SCHEMA DE RESERVAS
    exports.Reserva = mongoose.model('Reserva', mongoose.Schema({
        // Referencia o ID do local no schema Local
        local : {type: mongoose.Schema.Types.ObjectId, ref: 'Local'},
        sala : Object,
        data : Date,
        horaInicio : Date,
        horaFim : Date,
        responsavel : String,
        cafe : Boolean,
        quantidadePessoas : Number,
        descricao : String,
        criadoEm : Date
    }), 'Reservas');

    //Schema de Local
    exports.Local = mongoose.model('Local', mongoose.Schema({
        nome : String,
        salas : Array,
        criadoEm : Date
    }), 'Locais');
});
