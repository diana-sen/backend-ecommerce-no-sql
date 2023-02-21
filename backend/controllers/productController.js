const getProducts = (req,res) => {
    res.status(200).json({message: 'Obtain Products'})
}

const postProduct = (req,res) => {
    res.status(201).json({message: 'Created Product'})
}

const updateProduct = (req,res) => {
    res.status(200).json({message:`Product ${req.params.id} updated`})
}

const deleteProduct = (req,res) => {
    res.status(200).json({message:`Product ${req.params.id} deleted`})
}


module.exports = {
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct
}