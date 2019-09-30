import { IS_PROD } from './env';

import { CssPlugin } from './plugins';

// LOADERS
export function getStyleLoader() {
	if (!IS_PROD) return 'style-loader';

	return CssPlugin.loader;
}

export const cssLoader = {
	test: /.css$/,
	use: [getStyleLoader(), 'css-loader'],
};

export const babelLoader = {
	test: /\.(js|ts|tsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			rootMode: 'upward',
			ignore: [' '],
		},
	},
};

export const babelFileLoader = {
	...babelLoader,
	use: ['file-loader', babelLoader.use],
};

export const imageLoader = {
	test: /\.(png|svg|jpg|gif)$/,
	use: [
		{
			loader: 'url-loader',
			options: { limit: 2048 },
		},
		{
			loader: 'image-webpack-loader',
			options: { disable: !IS_PROD },
		},
	],
};

export const manifestLoader = {
	test: /\.webmanifest$/,
	use: 'file-loader',
};
