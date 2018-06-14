const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	entry:{
		app:['webpack-hot-middleware/client?reload=true', './src/index.js']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: '[name].[hash].js'
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, '../src'),
			'public': path.resolve(__dirname, '../public'),
			'~assets': path.resolve(__dirname, '../src/assets'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'~common': path.resolve(__dirname, '../src/common'),
			'~components': path.resolve(__dirname, '../src/components'),
			'~store': path.resolve(__dirname, '../src/store'),
			'~pages': path.resolve(__dirname, '../src/pages'),
			'~directives': path.resolve(__dirname, '../src/directives')
		}
	},
	module: {
		noParse: /es6-promise\.js$/, // avoid webpack shimming process
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 3000,
					name: '[name].[hash].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins:[
		new ExtractTextPlugin({
			filename: 'style.[chunkhash].css'
		}),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(__dirname, './src/index.tpl.html')
		}),
		new FriendlyErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],

	devServer: {
		hot:true,
		inline:true
	}
}
