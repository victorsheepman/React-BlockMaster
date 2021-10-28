const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			{
				test: /\.png/,
				type: "asset/resource"
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.s?css$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new CopyPlugin({
			patterns: [
			  {
				from: path.resolve(__dirname, "src", "assets/images"),
				to: "assets/images"
			  },
			  {
				from: path.resolve(__dirname, "src", "assets/icons"),
				to: "assets/icons"
			  }
			]
		}),
	],
	devServer: {
		historyApiFallback: true,
	}
}