const express = require('express')
const router = express.Router()
const { getProducts,postProduct,updateProduct,deleteProduct } = require('../controllers/productController')

//creating products endpoints

router.get('/', getProducts) // GET method route
router.post('/', postProduct) // POST method route
router.put('/:id', updateProduct) // PUT method route
router.delete('/:id', deleteProduct) // DELETE method route

module.exports = router