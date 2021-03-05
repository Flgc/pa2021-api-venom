/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 23/02/2021
 */

 const express = require('express');
 const router = express.Router();

 router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Projeto Aplicado - Controle de Manutenção com Node.js & PostgreSQL',
    version: '1.0.0',
  });
});

module.exports = router;