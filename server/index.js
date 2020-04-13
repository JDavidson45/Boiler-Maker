const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
//body parsing middle ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))
//when browser get the index.html it will request static assets from here like css, html etc
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

//if request does not match an api route this will send back our static html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});
//deals with 500 errors or sends error
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error.')
})

module.exports = app
