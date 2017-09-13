var db = require('../config/db-config.js');

// Consulta reserva com os parâmetros passados
exports.consulta = function(consulta, callback){
    db.Reserva.find({
        local: consulta.local,
        carro: consulta.sala,
        $and: [
        {
            dataInicio: {
                $gte:  new Date(consulta.dataInicio)
            },
            dataFim: {
                $lte:  new Date(consulta.dataFim)
            }
        }
     ]
    })
        .populate('local')
        .exec(function (error, reserva) {
            if (error){
                callback({error : 'Não foi possível retornar sua consulta'})
            } else {
                callback(reserva);
                console.log('tem reserva');
                callback(false);
            }
        });
    }


exports.buscaTodos = function(callback){
    db.Reserva.find({})
        .populate('local')
        .exec(function(error, reservas) {
            if(error) {
                callback({ error: 'Não foi possível retornar suas reservas' });
            } else {
                callback(reservas);
            }
        });
};

exports.buscaPorId = function(id, callback){
    db.Reserva.findById(id)
        .populate('local')
        .exec(function(error, reserva) {
        if(error){
            callback({error: 'Não foi possível retornar a reserva'})
        } else {
            callback(reserva);
        }
    });
};

exports.salva = function(reserva, callback){
    new db.Reserva({
        local : reserva.local,
        sala : reserva.sala,
        data : reserva.data,
        horaInicio : reserva.horaInicio,
        horaFim : reserva.horaFim,
        responsavel : reserva.responsavel,
        cafe : reserva.cafe,
        quantidadePessoas : reserva.quantidadePessoas,
        descricao : reserva.descricao,
        criadoEm : new Date()
    }).save(function (error, reserva) {
        if(error){
            callback({error: 'Não foi possível salvar a reserva'})
        } else {
            callback(reserva);
        }
    });
};

exports.atualiza = function(reservaObj, callback){
    db.Reserva.findById(reservaObj._id, function (error, reserva) {
            reserva.local = reservaObj.local;
            reserva.sala = reservaObj.sala;
            reserva.data = reservaObj.Inicio;
            reserva.horaInicio = reservaObj.horaInicio;
            reserva.horaFim = reservaObj.horaFim;
            reserva.responsavel = reservaObj.responsavel;
            reserva.cafe = reservaObj.cafe;
            reserva.quantidadePessoas = reservaObj.quantidadePessoas;
            reserva.descricao = reservaObj.descricao;
            reserva.save(function (error, reserva) {
                if(error){
                    callback({error: 'Não foi possível alterar a reserva'});
                } else {
                    callback(reserva);
                }
        });
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

