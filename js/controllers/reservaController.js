var db = require('../config/db-config.js');

exports.buscaTodos = function(callback){
    db.Reserva.find({}, function (error, reserva) {
        if(error){
            callback({error: 'Não foi possivel retornar as reservas'})
        } else {
            callback(reserva);
        }
    });
};

exports.buscaPorId = function(id, callback){
    db.Reserva.findById(id , function (error, reserva) {
        if(error){
            callback({error: 'Não foi possivel retornar as reservas'})
        } else {
            callback(reserva);
        }
    });
};

exports.salva = function(reserva, callback){
    new db.Reserva({
        local : reserva.local,
        sala : reserva.sala,
        dataInicio : reserva.dataInicio,
        dataFim : reserva.dataFim,
        responsavel : reserva.responsavel,
        cafe : reserva.cafe,
        quantidadePessoas : reserva.quantidadePessoas,
        descricao : reserva.descricao,
        criadoEm : new Date()
    }).save(function (error, reserva) {
        if(error){
            callback({error: 'Não foi possivel salvar a reserva'})
        } else {
            callback(reserva);
        }
    });
};

exports.atualiza = function(reservaObj, callback){
    db.Reserva.findById(reservaObj._id, function (error, reserva) {
        if (error){
            callback({error: 'Não foi possivel alterar a reserva'})
        } else {
            reserva.local = reservaObj.local;
            reserva.sala = reservaObj.sala;
            reserva.dataInicio = reservaObj.dataInicio;
            reserva.dataFim = reservaObj.dataFim;
            reserva.responsavel = reservaObj.responsavel;
            reserva.cafe = reservaObj.cafe;
            reserva.quantidadePessoas = reservaObj.quantidadePessoas;
            reserva.descricao = reservaObj.descricao;

            reserva.save(function (error, reserva) {
                if(error){
                    callback({error: 'Não foi possivel alterar a reserva'});
                } else {
                    callback(reserva);
                }
            });
        }
    });
};

exports.deleta = function(id, callback){
    db.Reserva.findById(id , function (error, reserva) {
        if(error){
            callback({error: 'Não foi possivel deletar as reservas'});
        } else {
            reserva.remove(function (erro) {
                if (!erro){
                    callback({response: 'Reserva excluida com sucesso'});
                }
            });
        }
    });
};

