const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(
	__dirname,
	'../../src/'
);

module.exports = {
	mode: 'none',
	entry: path.resolve(ROOT_DIR, 'index.js'),
	output: {
		path: path.resolve(ROOT_DIR, 'dist'),
		filename: '[name].js',
		chunkFilename: '[name].part.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss|\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
		],
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, '../../index.html'),
		}),
	],
	optimization: {
		removeAvailableModules: true,
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,
		splitChunks: {
			chunks: 'async',
			minSize: 5000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 3,
			maxInitialRequests: 3,
			automaticNameDelimiter: '.',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					name: 'shared',
					reuseExistingChunk: true,
					enforce: true,
					chunks: 'all',
				},
				default: {
					chunks: 'async',
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				react: {
					test: /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router-dom|redux|redux-thunk)[\\/]/,
					name: 'vendor-react',
					reuseExistingChunk: true,
					chunks: 'all',
				},
			},
		},
	},
};