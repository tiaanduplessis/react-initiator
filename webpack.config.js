const path = require("path");
const webpack = require("webpack");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const glob = require("glob-all");

const pkg = require("./package.json");

const IN_DEV = process.env.NODE_ENV !== "production";

const basePlugins = [
  new CleanWebpackPlugin(["dist"]),
  new HardSourceWebpackPlugin(),
  new webpack.DefinePlugin({
    VERSION: pkg.version,
    IN_DEV
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new FaviconsWebpackPlugin("./src/favicon.png"),
  new MiniCssExtractPlugin({
    filename: IN_DEV ? "[name].css" : "[name].[hash].css",
    chunkFilename: IN_DEV ? "[id].css" : "[id].[hash].css"
  }),
  new StyleLintPlugin({
    context: "src",
    files: ["**/*.css"],
    fix: true
  })
];

const plugins = addEnvPlugins(basePlugins);

module.exports = {
  entry: "./src/App.jsx",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          IN_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                require("postcss-import")({ root: loader.resourcePath }),
                require('postcss-flexbugs-fixes'),
                require("postcss-cssnext")()
              ]
            }
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js|\/.jsx$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.js|\/.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        include: path.resolve("src")
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins,
  optimization: !IN_DEV
    ? {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false
          }),
          new OptimizeCSSAssetsPlugin()
        ]
      }
    : {}
};

function addEnvPlugins(basePlugins = []) {
  if (IN_DEV) {
    return [new DashboardPlugin(), new ErrorOverlayPlugin(), ...basePlugins];
  }

  return [
    ...basePlugins,
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, "src/**/*.html"),
        path.join(__dirname, "src/**/*.jsx")
      ]),
      purifyOptions: { info: true, minify: false }
    })
  ];
}
