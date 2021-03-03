/**
 * Arquivo: server.js
 * Descrição: Responsável por configurar toda a execução da aplicação
 * Data: 23/02/2021
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});
