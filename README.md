# Reserva de Salas Back-End
Sistema de gerenciamento de reserva de salas.

## Sobre
Projeto BackEnd do sistema de gerenciamento de reserva de salas, desenvolvido totalmente em JavaScript utilizando NodeJS com ExpressJS e banco de dados NoSQL MongoDB com Mongoose.

## Instalação
Requer o [](https://nodejs.org/) e [NPM](https://www.npmjs.com/) para o funcionamento.

```sh
$ git clone https://github.com/lucasvt/reserva-de-salas-backend.git
```
e depois:  
```sh
$ npm install
```
Também é necessário acessar o MongoDB e rodar o script abaixo para carregar os locais e salas:  ``
```sh
$ mongo
> db.createCollection('reserva_de_salas');
> use reserva_de_salas;
> db.createCollection('Locais');
> db.Locais.insert({nome: 'Florianópolis/SC', salas: [{nome: 'Joaquina'}, {nome: 'Ingleses'}, {nome: 'Jurerê'}], criadoEm: new Date()});
> db.Locais.insert({nome: 'Curitiba/PR', salas: [{nome: 'Matinhos'}, {nome: 'Caiobá'}, {nome: 'Guaratuba'}], criadoEm: new Date()});
> db.Locais.insert({nome: 'São Paulo/SP', salas: [{nome: 'Guarujá'}, {nome: 'Ubatuba'}, {nome: 'Ilhabela'}], criadoEm: new Date()});
```  

## Executando o projeto  
```sh
$ reserva-de-salas-backend/node app.js
```

## Licença  
MIT


