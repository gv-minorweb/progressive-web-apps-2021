# Progressive Web Apps @cmda-minor-web · 20-21

A progressive web application with static site generation.

## Usage

Clone this repository:  
`git clone https://github.com/gv-minorweb/progressive-web-apps-2021.git`

Register an API key on themoviedb.org and create an `.env` file in the root directory with the following details:
```
API_URL=https://api.themoviedb.org/3/
API_KEY=$YOUR_API_KEY
```

Optionally change configuration options such as source and dist directories/paths in `/config/config.js`. The config directory also hosts all development and production tasks that are called from `webpack.*.js` from the root.

The default working directory is `src` and the output/build directory is `dist`.

### Development
In development mode files are written to memory.

- `npm run start`

### Production
In production CSS and JS files are minified.

- `npm run build`  
_Generates static HTML files and outputs them into `dist` directory._
## Project structure

Initially this project started as a server side application, so all HTML files still reside in the `server` directory, mainly `server/views`.

For the HTML I use [Nunjucks](https://mozilla.github.io/nunjucks/) as templating engine.

For the styles I use SASS, although for the purpose of this application the css isn't split up in separate files.

```js
.
├── config/
│   ├── tasks/
│   │   ├── common // Tasks used for both dev & production
│   │   ├── dev
│   │   └── prod
│   ├── utils
│   └── config.js // Main project configuration
├── src/
│   ├── client // JS, CSS and static assets/
│   │   ├── fonts
│   │   ├── images
│   │   ├── js
│   │   ├── styles
│   │   └── manifest.json
│   └── server/
│       └── views/
│           ├── components // Atomic design components
│           ├── pages // Pages built up from components
│           ├── partials // Head/footer
│           └── templates // Template wrapper used around pages
├── webpack.common.js // Common webpack config used by both dev & production
├── webpack.dev.js // Extends common config
├── webpack.prod.js // Extends common config
└── package.json
```
