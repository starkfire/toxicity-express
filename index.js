const express = require('express')
const helmet = require('helmet')

require('@tensorflow/tfjs')

const app = express()

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const validate = require('./controllers/validate')
app.use('/api', validate)

app.listen(process.env.PORT || 3000, (err) => {
    if (err) console.log(err)

    console.log('Running on Port 3000')
})