const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

router.get('/', async (req, res) => {
  const apiURL = process.env.API_URL
  const apiKey = process.env.API_KEY

  const { results } = await fetch(`${apiURL}movie/now_playing?api_key=${apiKey}`).then(res => res.json())

  res.render('pages/index.njk', { data: results })
})

module.exports = router