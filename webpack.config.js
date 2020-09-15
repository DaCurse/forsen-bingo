const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		// Exposing environment variables to browser
		new EnvironmentPlugin({
			NODE_ENV: 'development',
			MAINTENANCE: false,
			API_URL: 'https://forsenbingo.tk/api/bingo/',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css',
		}),
		new OptimizeCssAssetsPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8,
					},
					compress: {
						ecma: 5,
						warnings: false,
						inline: 2,
					},
					mangle: {
						safari10: true,
					},
					output: { ecma: 5, comments: false, ascii_only: true },
				},
				extractComments: false,
				parallel: true,
				cache: true,
			}),
		],
	},
};
