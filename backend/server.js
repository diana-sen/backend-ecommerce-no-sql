const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

//add errorHandler
const { errorHandler } = require('./middleware/errorMiddleware')


//create server and app
const app = express()

// express.json and urlencoded to send data
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.listen(port, () =>console.log(`server started on port ${port}`))

//endpoints products, categories
app.use('/api/products',require('./routes/productsRoutes'))
app.use('/api/categories',require('./routes/categoriesRoutes'))

//using errorHandler
app.use(errorHandler)

//connect to db
const colors = require('colors')
const connectDB = require('./config/db')
connectDB()


