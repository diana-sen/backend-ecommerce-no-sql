const express = require('express')
const router = express.Router()
const { getCategories,postCategory,updateCategory,deleteCategory } = require('../controllers/categoryController')

//creating products endpoints

router.get('/', getCategories) // GET method route
router.post('/', postCategory) // POST method route
router.put('/:id', updateCategory) // PUT method route
router.delete('/:id', deleteCategory) // DELETE method route

module.exports = router