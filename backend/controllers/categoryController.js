const getCategories = (req,res) => {
    res.status(200).json({message: 'Obtain Categories'})
}

const postCategory = (req,res) => {
    res.status(201).json({message: 'Created Category'})
}

const updateCategory = (req,res) => {
    res.status(200).json({message:`Category ${req.params.id} updated`})
}

const deleteCategory = (req,res) => {
    res.status(200).json({message:`Category ${req.params.id} deleted`})
}


module.exports = {
    getCategories,
    postCategory,
    updateCategory,
    deleteCategory
}