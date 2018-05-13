# ⚛ react-initiator

> Another opinionated React project seed

## Install

This seed assumes you are using [yarn](https://yarnpkg.com/en/) as your package manager.

```sh
$ git clone --depth=0 https://github.com/tiaanduplessis/react-initiator.git newProject
$ cd newProject
$ yarn
$ yarn start
```

## Features

- Bundling using [Webpack](https://webpack.js.org/), with [CSS](https://github.com/NMFR/optimize-css-assets-webpack-plugin)/[JS](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) optimzation and [CSS purifiction](https://github.com/webpack-contrib/purifycss-webpack) for production builds.
- [Linting](https://eslint.org/) of JS using [Airbnb's ESLint config](https://www.npmjs.com/package/eslint-config-airbnb).
- [Linting](https://github.com/stylelint/stylelint) of CSS using [Standard config](https://github.com/stylelint/stylelint-config-standard).
- Compiling of JS using [Babel](https://babeljs.io/). [Configured](https://github.com/browserslist/browserslist) for Browsers with more than 1% market share.
- [Favicon generation](https://github.com/jantimon/favicons-webpack-plugin).
- [Intermediate caching](https://github.com/mzgoddard/hard-source-webpack-plugin) of modules.
- [Flow](https://flow.org/) static type checking.
- Testing using [Jest](https://facebook.github.io/jest/).
- [PostCSS](https://postcss.org/) processing of CSS with [cssnext](cssnext), [autoprefixer](https://github.com/postcss/autoprefixer) and [inlining `@import` rules](https://github.com/postcss/postcss-import).
- Git hooks using [husky](https://github.com/typicode/husky).

## Scripts

* `start` - Starts up [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with Hot Module Replacement.
* `dashboard` - Starts up [webpack-dev-server](https://github.com/webpack/webpack-dev-server) via [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard)
* `coverage` - [Jest](https://facebook.github.io/jest/) code coverage reporting
* `build` - Create production build in `dist` directory using [Webpack](https://webpack.js.org/).
* `serve` - Serve the `dist` directory.
* `test` - Run [Jest](https://facebook.github.io/jest/) tests.
* `flow` - Run static type checking with [Flow](https://flow.org/).
* `lint` - Run linting using [ESlint](https://eslint.org/).

## License

MIT
