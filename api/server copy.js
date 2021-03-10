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
 
     // ===> Downloading Files Video, can photo and image
 
     if (message.isMedia === true || message.isMMS === true) {
       const buffer = await client.decryptFile(message);
       const fileName = `First-some-file-name.${mime.extension(message.mimetype)}`;
       await fs.writeFile(fileName, buffer, (err) => {
         // At this point you can do whatever you want with the buffer
         // here's the file ==> console.log(`Mensagem buffer: ', ${buffer}`);
         // here's the namefile ==> console.log(`Mensagem file: ', ${fileName}`);
 
     //     // console.log(`Mensagem buffer: , ${buffer}`);
         console.log(`Getting Mensagem file: , ${fileName}`);
       });
     }
 
     // ===> microfone Files 
 
     if (message.type === "ptt" || message.type === "Audio") {
       const buffer = await client.decryptFile(message);
       const fileName = `Second-some-file-name.${mime.extension(message.mimetype)}`;
       await fs.writeFile(fileName, buffer, (err) => {
         // At this point you can do whatever you want with the buffer
         // here's the file ==> console.log(`Mensagem buffer: ', ${buffer}`);
         // here's the namefile ==> console.log(`Mensagem file: ', ${fileName}`);
 
     //  console.log(`Mensagem buffer: , ${buffer}`);
         console.log(`Getting Mensagem file: , ${fileName}`);
       });
     }
 
   // ===> text chat 
 
     if (message.type === "chat") {
       const buffer = message.body;
       console.log(`Mensagem buffer: , ${buffer}`);
     }
 
     // ===>  obtains json with user information
 
     // await client
     // .sendText('5521998535530@c.us', '👋 Bem vindo!')
     // .then((result) => {
     //console.log('Result: ', result); //return object success
     // })
     // .catch((erro) => {
     //console.error('Error when sending: ', erro); //return object error
     // });
 
     // ===>  Retrieve contact phone number
     // Analisando trecho abaixo para pegar dados do contato em conversação
 
     // const contacts = await client.getBlockList();
     // console.log(`Seus dados: , ${telefone}`);
 
     // Buscar todos os clientes e gravar na tabela de clientes e telefones
     // busca todos os contatos
 
     const contactList = await client.getAllContacts()
     contactList.forEach(async function (contato, indice, array) {
 
         // Pego o telefone do lead para ver se já existe no cadastro
         // let telefone = new Telefone();
         // telefone.zap_from = contato.id._serialized;
         // telefone.telefone = contato.id.user;
         // // await telefone.findByField('zap_from', contato.id._serialized)
 
         // if (telefone.id_cliente == 0) {
         //     const cliente = new Cliente();
         //     cliente.nome_cliente = (contato.pushname != undefined ? contato.pushname :
         //         (contato.name != undefined ? contato.name :
         //             (contato.shortName != undefined ? contato.shortName : ''))),
         //         cliente.label = (contato.labels != undefined ? contato.labels : []);
 
             // // Gravo no banco os dados do cliente 
             // await cliente.gravar();
 
             // // Atualizo o id do cliente cadastrado no objeto telefone
             // telefone.id_cliente = cliente._id;
 
             // // Gravo o telefone no banco
             // await telefone.gravar();
         // }
     });
 
     //console.log(`Seus dados: , ${see}`);
 
     // client.sendText(
     //   message.from,
     //   '👋 Olá!!! \n' +
     //     'A Autocenter PA2020 agradece seu contato. \n' +
     //     'Como podemos ajudar? \n' +
     //     '1 - Posição da serviço.  \n' +
     //     '2 - Falar com o atendente. \n' +
     //     '3 - Falar com mecânico.  \n' +
     //     '4 - Deixar um recado. \n'
     // );
   });
 }
 
 
 
 
 // // captura de texto digitado
 
 // if (message.type === 'chat') {
 //   const msge = message.body.toUpperCase();
 // }
 
 // // captura de audo do microfone whatsapp
 
 // if (message.type === ptt || message.type === Audio) {
 //   const buffer = await client.decryptFile(message);
 // }
 