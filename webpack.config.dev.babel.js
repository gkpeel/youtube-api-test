import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from 'dotenv';

module.exports = (env) => {
	const basePath = path.join(__dirname, '.env');
	const envPath = `${basePath}.${env.ENVIRONMENT}`;
	const finalPath = fs.existsSync(envPath) ? envPath : basePath;
	const fileEnv = dotenv.config({ path: finalPath }).parsed;

	const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
		return prev;
	}, {});

	return {
		entry: './src/index.js',
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.(s*)css/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
		output: {
			path: path.join(__dirname, 'dist'),
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
			new webpack.DefinePlugin(envKeys),
		],
	};
};
