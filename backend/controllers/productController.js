const getProducts = (req,res) => {
    res.status(200).json({message: 'Obtain Products'})
}

const postProduct = (req,res) => {
    if (!req.body.texto) {
        res.status(400) 
         throw new Error('Please provide a Product')
      }
    res.status(201).json({message: 'Created Product'})
}

const updateProduct = (req,res) => {
    if (!req.body.texto) {
        res.status(400) 
         throw new Error('Please provide info to update a Product')
      }
    res.status(200).json({message:`Product ${req.params.id} updated`})
}

const deleteProduct = (req,res) => {
    if (!req.body.texto) {
        res.status(400) 
         throw new Error('Please provide a Product to delete')
      }
    res.status(200).json({message:`Product ${req.params.id} deleted`})
}


module.exports = {
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct
}