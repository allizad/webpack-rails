module.exports = {
  entry: "./lib/webpack/index.es6",
  output: {
    path: __dirname + "/lib/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.es6?$/,
        exclude: /node_modules/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      }
    ]
  }
};
