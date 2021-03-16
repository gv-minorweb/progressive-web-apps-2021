require('dotenv').config()

const nunjucks = require('nunjucks')

// Utils
const getData = require('../../utils/getData')
const writeFile = require('../../utils/writeFile')

const generateHomePage = async () => {
  const { results: data } = await getData('movie/now_playing')
  const html = renderTemplate('pages/index.njk', data)

  await writeFile('./dist', 'index.html', html)
}

const generateMoviePages = async () => {
  const { results: data } = await getData('movie/now_playing')

  data.forEach(async ({ id }) => {
    const movieData = await getData(`movie/${id}`)
    const html = renderTemplate('pages/movie.njk', movieData)

    await writeFile(`./dist/movie/${id}`, 'index.html', html)
  })
}

const renderTemplate = (templatePath, data) => {
  nunjucks.configure('./src/server/views')
  return nunjucks.render(templatePath, { data })
}

generateHomePage()
generateMoviePages()