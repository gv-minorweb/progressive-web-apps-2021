require('dotenv').config()

// Packages
const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')

const { port } = require('./config')

// Routes
const indexRouter = require('./routes/index')
const movieRouter = require('./routes/movie')

// Create express app
const app = express()

// Static files
app.use('/public', express.static(path.join(__dirname, 'public')))

// Set view engine
nunjucks.configure('src/server/views', {
  autoescape: true,
  express: app
})

// Use routes
app.use('/', indexRouter)
app.use('/movie', movieRouter)

// Start app
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
})