const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
require('dotenv').config()


const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (erorr) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connected.')
})

const app = express()
app.use(express.json())

app.listen(4000, () => {
  console.log(`Server listening at ${4000}`)
})

app.use('/api', routes)