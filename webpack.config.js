const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'admin/assets/js/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // added babel-preset-stage-3 for resolving the error at "...rest" spread
          // syntax in app.js "const AuthenticatedRoute = ({ component: Component, ...rest})"
          query:{
            "presets": ["react","stage-3"]
          }
        }
      }
      // ,{
      //    test: /\.(jpe?g|png|gif)$/,
      //     loader: 'file-loader',
      //    query:{
      //      name: 'assets/images/[name].[ext]'
      //    }
      //  },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
        {from: './assets', to: 'assets'},
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3003,
    historyApiFallback: true, // resolves error while refresh or access directly
                              // from browser. Error GET /someroot
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5000',
    //     secure: false
    //   }
    // }
  }
};