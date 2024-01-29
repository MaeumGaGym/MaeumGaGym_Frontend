const path = require('path')

module.exports = {
  target: 'node',
  entry: './index.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /(node_modules)(\.yarn)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            parseMap: true,
            jsc: {
              parser: {
                syntax: "typescript"
              }
            }
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        exclude: /\/src\//,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
              publicPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
}