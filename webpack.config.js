const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				use: [
					{
						loader: 'file-loader',
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
		}),
	],
};
