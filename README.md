# Reserva de Salas Back-End
Sistema de gerenciamento de reserva de salas.

## Sobre
Projeto BackEnd do sistema de gerenciamento de reserva de salas, desenvolvido totalmente em JavaScript utilizando NodeJS com ExpressJS e banco de dados NoSQL MongoDB com Mongoose.

## Instalação
Requer o [](https://nodejs.org/) e [NPM](https://www.npmjs.com/) para o funcionamento.

###Faça o download do projeto:
Link do repositório [Reserva de Salas BackEnd](https://github.com/lucasvt/reserva-de-salas-backend.git)

```sh
$ git clone https://github.com/lucasvt/reserva-de-salas-backend.git
```
e depois:
```sh
$ npm install
```
###Para criar Local/Filiais e Sala
Não será possível incerir as reservas sem rodar o Script para criar as listas de locais e salas


```sh
mongo
db.createCollection('reserva_de_salas');
use reserva_de_salas;
db.createCollection('Locais');
db.Locais.insert({nome: 'Florianópolis/SC', salas: [{nome: 'Joaquina'}, {nome: 'Ingleses'}, {nome: 'Jurerê'}], criadoEm: new Date()});
db.Locais.insert({nome: 'Curitiba/PR', salas: [{nome: 'Matinhos'}, {nome: 'Caiobá'}, {nome: 'Guaratuba'}], criadoEm: new Date()});
db.Locais.insert({nome: 'São Paulo/SP', salas: [{nome: 'Guarujá'}, {nome: 'Ubatuba'}, {nome: 'Ilhabela'}], criadoEm: new Date()});
db.Locais.find().pretty();
exit;
```
## Licença
MIT


