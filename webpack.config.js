const webpack            = require('webpack')
const merge              = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path               = require('path')

const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  src:          path.join(__dirname, 'src'),
  dist:         path.join(__dirname, 'dist'),
  example:      path.join(__dirname, 'src/example'),
  node_modules: path.join(__dirname, 'node_modules'),
}

const common = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      PATHS.src,
      PATHS.node_modules,
    ],
  }
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.example,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      devtool: 'eval-source-map',
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    entry: {
      example: PATHS.example,
    },
    output: {
      path: PATHS.dist,
      filename: '/bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  })
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      src: PATHS.src,
    },
    output: {
      path: PATHS.dist,
      filename: '/react-pagination.js',
    },
    plugins: [
      new CleanWebpackPlugin([PATHS.dist])
    ]
  })
}