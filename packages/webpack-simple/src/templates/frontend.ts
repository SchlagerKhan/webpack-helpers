import { Configuration } from 'webpack';
import * as merge from 'webpack-merge';

import { babelLoader, cssLoader, imageLoader, manifestLoader } from '../loaders';
import { createHtmlPlugin, CssPlugin, TerserPlugin } from '../plugins';
import { getJsFile, getCssFile } from '../helpers';

import { createDefaultConfig, BasicOpts } from './default';

interface FrontendOpts extends BasicOpts {
	publicPath?: string;
	port: number;
	htmlOptions?: object;
}

export function createFrontendConfig(opts: FrontendOpts, otherOpts?: Configuration): Configuration {
	const { publicPath = '/', port, htmlOptions, ...restOpts } = opts;
	const { path } = opts;

	const filename = getJsFile();
	const defaultOpts = { filename, ...restOpts };
	const defaultConfig = createDefaultConfig(defaultOpts, otherOpts);

	return merge.smart(defaultConfig, {
		output: {
			publicPath,
		},
		module: {
			rules: [babelLoader, cssLoader, imageLoader, manifestLoader],
		},
		plugins: [
			// prettier-ignore
			createHtmlPlugin(htmlOptions),
			new CssPlugin({ filename: getCssFile() }),
		],
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
