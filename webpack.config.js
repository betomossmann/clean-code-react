const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'dist/js'),
    publicPath: 'dist/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: '.dist',
    writeToDisk: true,
    historyApiFallback: true
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
