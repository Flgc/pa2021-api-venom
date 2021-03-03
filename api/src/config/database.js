/**
 * Arquivo: src/config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 23/02/2021
 */

 // ==> Método responsável por cria um novo 'Product':

 const { Pool } = require('pg');
 const dotenv = require('dotenv');

 dotenv.config();

 // ==> Conexão com a Base de Dados:
 const pool = new Pool({
    connectionString: process.env.DATABASE_URL
 });

 pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
 });

 module.exports = {
    query: (text, params) => pool.query(text, params),
 };