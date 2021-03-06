module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:flowtype/recommended", "plugin:jest/recommended"],
  plugins: ["compat", "flowtype", "jest"],
  globals: {
    IN_DEV: true,
    VERSION: true
  },
  env: {
    jest: true,
    browser: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
