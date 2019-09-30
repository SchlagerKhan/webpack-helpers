import { Configuration } from 'webpack';
import merge from 'webpack-merge';

import { babelLoader, cssLoader, imageLoader, manifestLoader } from '../loaders';
import { createHtmlPlugin, CssPlugin, TerserPlugin } from '../plugins';
import { getJsFile, getCssFile } from '../helpers';

import { createDefaultConfig } from './default';

interface FrontendOpts {
	entry: string;
	path: string;
	publicPath?: string;
	port: number;
	htmlOptions?: object;
}

export function createFrontendConfig(opts: FrontendOpts, otherOpts?: Configuration): Configuration {
	const { port, htmlOptions, ...restOpts } = opts;
	const { path } = opts;

	const filename = getJsFile(true);
	const defaultOpts = { filename, ...restOpts };
	const defaultConfig = createDefaultConfig(defaultOpts, otherOpts);

	return merge.smart(defaultConfig, {
		module: {
			rules: [babelLoader, cssLoader, imageLoader, manifestLoader],
		},
		plugins: [createHtmlPlugin(htmlOptions), new CssPlugin({ filename: getCssFile() })],
		devServer: {
			host: '0.0.0.0',
			port,
			historyApiFallback: true,
			contentBase: path,
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: true,
					terserOptions: {
						keep_classnames: true,
					},
				}),
			],
			moduleIds: 'hashed',
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
		},
	});
}
