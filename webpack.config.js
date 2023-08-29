const path = require('path');

module.exports = [{
	mode: "development",
	stats: {
		builtAt: false,
		hash: false,
		version: false,
		modules: false,
		timings: false
	},
	entry: { "testcafe-iframe": './src/main.ts' },
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		(compiler) => {
			compiler.hooks.done.tap("Timestamp", () => {
				setTimeout(() => {
					console.log("\x1b[34m%s\x1b[0m", `[${new Date().toLocaleTimeString()}] Finished building.`);
				});
			});
		}],
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
}
];