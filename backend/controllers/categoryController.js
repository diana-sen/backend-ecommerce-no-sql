const getCategories = (req,res) => {
    res.status(200).json({message: 'Obtain Categories'})
}

const postCategory = (req,res) => {
    if (!req.body.texto) {
        res.status(400) 
         throw new Error('Please provide a Category')
      }
    res.status(201).json({message: 'Created Category'})
}

const updateCategory = (req,res) => {
    if (!req.body.texto) {
        res.status(400) 
         throw new Error('Please provide info to update a Category')
      }
    res.status(200).json({message:`Category ${req.params.id} updated`})
}

const deleteCategory = (req,res) => {
    if (!req.body.texto) {
        res.status(400) 
         throw new Error('Please provide a Category to delete')
      }
    res.status(200).json({message:`Category ${req.params.id} deleted`})
}


module.exports = {
    getCategories,
    postCategory,
    updateCategory,
    deleteCategory
}