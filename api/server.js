/**
 * Arquivo: server.js
 * Descrição: Responsável por configurar toda a execução da aplicação
 * Data: 23/02/2021
 */

'use strict';

const app = require('./src/app');
const port = process.env.PORT || 3000;
const vbot = require('venom-bot');
const fs = require('fs');
const mime = require('mime-types');

app.listen(port, () => {
  console.log('!Aplicação executando na porta ', port);
});

vbot
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    if (String(message.body).toUpperCase() == 'SAIR') {
      client.sendText(
        message.from,
        'Nossa conversa não será armazenadas, obrigado! '
      );
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

    // ===> Downloading Files Medias and image

    if (message.isMedia === true || message.isMMS === true) {
      const buffer = await client.decryptFile(message);
      const fileName = `some-file-name.${mime.extension(message.mimetype)}`;
      await fs.writeFile(fileName, buffer, (err) => {
        // At this point you can do whatever you want with the buffer
        // here's the file ==> console.log(`Mensagem buffer: ', ${buffer}`);
        // here's the namefile ==> console.log(`Mensagem file: ', ${fileName}`);

        // console.log(`Mensagem buffer: , ${buffer}`);
        console.log(`Mensagem file: , ${fileName}`);
      });
    }

    // ===>  obtains json with user information

    await client
      .sendText('5521998535530@c.us', '👋 Bem vindo!')
      .then((result) => {
        //console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        //console.error('Error when sending: ', erro); //return object error
      });

    // ===>  Retrieve contact phone number

    const contacts = await client.getBlockList();
    console.log(`Seus dados: , ${contacts}`);

    client.sendText(
      message.from,
      '👋 Olá!!! \n' +
        'A Autocenter PA2020 agradece seu contato. \n' +
        'Como podemos ajudar? \n' +
        '1 - Posição da serviço.  \n' +
        '2 - Falar com o atendente. \n' +
        '3 - Falar com mecânico.  \n' +
        '4 - Deixar um recado. \n'
    );
  });
}
