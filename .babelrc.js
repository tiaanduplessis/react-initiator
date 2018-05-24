const IS_TEST = String(process.env.NODE_ENV) === 'test'

module.exports = {
  "presets": [["@babel/preset-env", {
    modules: IS_TEST ? 'commonjs' : false,
    "targets": {
      "browsers": ["> 1%"]
    }
  }], "@babel/preset-react", "@babel/preset-flow"],
  "plugins": ["transform-flow-strip-types"]
}
