var db = require('../config/db-config.js');

exports.buscaTodos = function(callback){
    db.Local.find({}, function (error, reserva) {
        if(error){
            callback({error: 'Não foi possivel retornar as locais'})
        } else {
            callback(reserva);
        }
    });
};