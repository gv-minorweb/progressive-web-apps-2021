const path = require('path')
const fs = require('fs')
const fsPromises = fs.promises

const writeFile = async (directory, filename, content) => {
  await fsPromises.mkdir(directory, { recursive: true })
  await fsPromises.writeFile(path.join(directory, filename), content)
}

module.exports = writeFile