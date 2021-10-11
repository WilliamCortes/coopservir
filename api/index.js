const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes')
const app = express()

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/devicesdb',
    { 
        useNewUrlParser: true,
     }
)

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())

app.use('/', routes())

app.listen(3001, () => {
    console.log('Listen on port: 3000')
})