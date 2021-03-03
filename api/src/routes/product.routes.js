// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 * Data: 25/02/2021
 */

 const router = require('express-promise-router') ();
 const productController = require('../controllers/product.controller');


 // ==> Define as rotas do CRUD - 'Product':

 // ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products

 router.post('/products', productController.createProduct);
 
 // ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products 

 router.get('/products', productController.listAllProducts);

// ==> Rota responsável em buscar por 'Id' os 'Products': (GET): localhost:3000/api/products/:id 

router.get('/products/:id', productController.findProductById);

// ==> Rota responsável por atualizar por 'Id' os 'Products': (PUT): localhost:3000/api/products/:id 

router.put('/products/:id', productController.updateProductById);

// ==> Rota responsável por deletar por 'Id' os 'Products': (DELETE): localhost:3000/api/products/:id 

router.delete('/products/:id', productController.deleteProductById);

 module.exports = router;