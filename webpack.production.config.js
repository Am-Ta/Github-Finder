module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: __dirname + "/dist"
  },
  mode: "production",
  module: {
    rules: []
  }
};
