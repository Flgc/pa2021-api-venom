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
        
        if (String(message.body).toUpperCase() == '1') {
            // let proprietario = new Lead();
            // proprietario.name = message.sender.pushname;
            // proprietario.phone = String(message.from).split('@')[0];
            // yield proprietario.populate;

            client.sendText(message.from, 'Qual o número da Ordem de Serviço?');
            return;
        }

        client.sendText(message.from, 'Olá!!! \n' +
            'A Autocenter PA2020 agradece seu contato. \n'+
            'Como podemos ajudar? \n' +

            '1 - Posição da serviço.  \n' +
            '2 - Falar com o atendente. \n' +
            '3 - Falar com mecânico.  \n'+
            '4 - Deixar um recado. \n');
    });
}