import { Configuration } from 'webpack';
import * as merge from 'webpack-merge';

import { babelLoader, cssLoader, imageLoader, manifestLoader } from '../../loaders';
import { HtmlPlugin } from '../../plugins';
import { getJsFile } from '../../helpers';

import { createDefaultConfig, BasicOpts } from '../default';

import { optimization } from './optimization';
import { getPlugins } from './plugins';

interface FrontendOpts extends BasicOpts {
	publicPath?: string;
	port?: number;
	htmlOptions?: HtmlPlugin.Options;
	htmlInject?: {
		tag: string;
		attrs: any;
	};
}

export function createFrontendConfig(opts: FrontendOpts, otherOpts?: Configuration): Configuration {
	const {
		// prettier-ignore
		publicPath = '/',
		port = 3000,
		htmlOptions,
		htmlInject,
		...basicOpts
	} = opts;

	const distFile = getJsFile();
	const defaultOpts = Object.assign({}, basicOpts, { distFile });
	const defaultConfig = createDefaultConfig(defaultOpts, otherOpts);

	return merge.smart(defaultConfig, {
		output: {
			publicPath,
		},
		module: {
			rules: [babelLoader, cssLoader, imageLoader, manifestLoader],
		},
		plugins: getPlugins(htmlOptions, htmlInject),
		devServer: {
			host: '0.0.0.0',
			port,
			historyApiFallback: true,
			contentBase: opts.distDir,
		},
		optimization,
	});
}
