const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, use: 'babel-loader' },
			{
				test: /\.s?(a|c)?ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { url: false } },
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/img',
							name: '[name].[ext]',
						},
					},
				],
			},
		],
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			favicon: './src/assets/img/favicon.ico',
			template: './public/index.html',
			inject: true,
		}),
		new EnvironmentPlugin({
			NODE_ENV: 'development',
			MAINTENANCE: false,
			API_URL: 'https://forsenbingo.tk/api/bingo/',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css',
		}),
	],
};
