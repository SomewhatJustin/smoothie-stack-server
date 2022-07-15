const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors({
  origin: ['https://mysmoothiestack.com', 'http://localhost:3000']
}));


const mongoString = process.env.DATABASE_URL
const port = process.env.PORT || 4000

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (erorr) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connected.')
})

app.listen(port, () => {
  console.log(`Server listening at ${port}`)
})

app.use('/api', routes)