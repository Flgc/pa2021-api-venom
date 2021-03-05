/**
 * Arquivo: server.js
 * Descrição: Responsável por configurar toda a execução da aplicação
 * Data: 23/02/2021
 */

"use strict";

 const app = require('./src/app');
 const port = process.env.PORT || 3000;
 const vbot = require('venom-bot');

app.listen(port, () => {
    console.log('Aplicação executando na porta ', port);
});

vbot
.create()
.then((client) => start(client))
.catch((erro) => {
console.log(erro);
});

function start(client) {
    client.onMessage((message) => {    
        if (String(message.body).toUpperCase() == 'SAIR') {
            client.sendText(message.from, 'Nossa conversa não será armazenadas, obrigado! ');
            return;
        }
        
        if (String(message.body).toUpperCase() == 'SIM') {
            // let proprietario = new Lead();
            // proprietario.name = message.sender.pushname;
            // proprietario.phone = String(message.from).split('@')[0];
            // yield proprietario.populate;

            client.sendText(message.from, 'Obrigado por autorizar, registraremos na base de dados do histórico' +
                ' do seu veículo.');
            return;
        }

        client.sendText(message.from, 'Olá!!! \n' +
            'Sou uma atendente virtual. \n' +
            'Com a sua autorização irei armazenar em uma base de dados nossas' +
            ' conversas. \n\n' +
            ' Digite "SIM" para autorizar ou "SAIR" para proceguir sem o armazenamento.');
    });
}