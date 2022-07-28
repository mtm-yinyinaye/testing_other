/*eslint-env node*/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      react: path.resolve('./node_modules/react'),
      '@emotion/react': path.resolve('./node_modules/@emotion/react'),
      'react-hook-form': path.resolve('./node_modules/react-hook-form'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8888,
    host: '0.0.0.0',
  },
}
