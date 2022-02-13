module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    library: {
      name: 'numToWord',
      type: 'umd',
      // export: 'default'
    },
    globalObject: 'this',
  }
}