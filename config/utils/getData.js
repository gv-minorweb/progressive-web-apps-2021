require('dotenv').config()
const fetch = require('node-fetch')

const apiURL = process.env.API_URL
const apiKey = process.env.API_KEY

/**
 * Retrieves data.
 * @module
 * @param {string} endpoint - The endpoint to request data from.
 * @param {(string|Array)} appendTo - Make sub requests within the same namespace in a single HTTP request.
 * @returns {Object} The data object.
 */
const getData = async (endpoint, appendTo) => {
  const requestURL = `${apiURL}${endpoint}?api_key=${apiKey}${appendTo ? `&append_to_response=${[appendTo].join(',')}` : ''}`

  const response = await fetch(requestURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response
    })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
    })

  return response
}

module.exports = getData
