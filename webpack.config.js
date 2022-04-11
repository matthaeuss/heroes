const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');

const index = 'index';


module.exports = {
   entry: `./src/${index}.ts`,
   devtool: 'inline-source-map',
   mode: 'development',
   module: {
       rules:[
           {
               test: /\.tsx?$/, // ? oznacza ze 'x' jest opcjonale a $, żę .ts musi byc na koncu pliku
               use: 'ts-loader'
           },
           {
               test: /\.s[ac]ss$/,
               use: [
                   MiniCssExtractPlugin.loader, 
                   {
                       loader: 'css-loader'
                   },
                   {
                       loader: "sass-loader",
                       options: {
                           sourceMap: true
                       }
                   }
               ]
           }
       ]
   },
   plugins: [
       new MiniCssExtractPlugin({ // new tworzy nowy konstruktor
            filename: '[name].bundle.css'
       }),
       new CopyWebpackPlugin({
           patterns: [
               {
                   from: `./${index}.html`
               }
           ]
       })
   ],
   resolve: {
       extensions: ['.ts', '.js']
   },
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, 'dist')
   },
   devServer: {
       port: 8080,
       proxy: {
           '/api':{
               target: {
                   host: '0.0.0.0',
                   protocol: 'http:',
                   port: 8081
               },
               pathRewrite: {
                   '^/api': '' // ^ na początku znaczy, że zaczyna sie od 'api', wszystkie ednpointy
               }
           }
       }
   }
}
