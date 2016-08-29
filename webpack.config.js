var config = {
  entry: './frontend/index.js',
  output: {
    path: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }    
    ]
  }
};

module.exports = config;