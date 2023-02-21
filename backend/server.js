const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 6000


//create server and app
const app = express()

app.listen(port, () =>console.log(`server started on port ${port}`))