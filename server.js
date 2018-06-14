const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-Hot-middleware")
const config = require('./webpack.config')

config.mode = "development"
const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	historyApiFallback: true
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3001, '127.0.0.1', function() {
	console.log('server is start in 3001 port')
})