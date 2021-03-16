const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

// Redirect to home
router.get('/', (req, res) => {
  res.redirect('/')
})

router.get('/:id', async (req, res) => {
  const apiURL = process.env.API_URL
  const apiKey = process.env.API_KEY

  const movieId = req.params.id

  const data = await fetch(`${apiURL}movie/${movieId}?api_key=${apiKey}`).then(res => res.json())

  res.render('pages/movie.njk', { data })
})

module.exports = router