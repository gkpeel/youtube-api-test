import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(s*)css/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	output: {
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
