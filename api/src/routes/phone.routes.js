/**
 * Arquivo: src/controllers/phone.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Phone'
 * Data: 05/03/2021
 */

// ==> * método responsável por criar um novo 'Phone'.

const db = require('../config/database');

exports.createPhone = async (req, res) => {
  const { phone_number } = req.body;
  const { rows } = await db.query(
    'INSERT INTO phone (phonenumber) VALUES ($1)',
    [phone_number]
  );

  res.status(201).send({
    message: 'Phone number added successfully!',
    body: {
      product: { phone_number },
    },
  });
};

// ==> Método responsável por listar todos os 'Products':

exports.listAllPhone = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM phone ORDER BY phonenumber ASC'
  );

  res.status(200).send(response.rows);
};

// ==> Método responsável em buscar o 'Phone' por 'phonenumber'

exports.findPhoneByNumber = async (req, res) => {
  const phone_Number = parseInt(req.params.phone_number);
  const response = await db.query(
    'SELECT * FROM phone WHERE phonenumber = $1',
    [phone_Number]
  );

  res.status(200).send(response.rows);
};

// ==> Método responsável por deletar um 'Phone' por 'Number':

exports.deletePhoneByNumber = async (req, res) => {
  const phone_number = parseInt(req.params.phone_number);

  await db.query('DELETE FROM phone WHERE phonenumber = $1', [phone_number]);

  res
    .status(200)
    .send({ message: 'Phone deleted successfully!', PhoneByNumber });
};
