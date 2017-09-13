var db = require('../config/db-config.js');

exports.buscaTodosLocais = function(callback){
    db.Local.find({}, function (error, reservas) {
        if(error){
            callback({error: 'Não foi possivel retornar as locais'})
        } else {
            callback(reservas);
        }
    });
};