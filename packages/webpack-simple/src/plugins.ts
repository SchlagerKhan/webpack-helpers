import * as path from 'path';
import * as webpack from 'webpack';

import HtmlPlugin from 'html-webpack-plugin';
import CssPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import {
	// prettier-ignore
	NODE_ENV,
	RUNTIME_ENV,
	PORT,
} from './env';

export const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV,
	RUNTIME_ENV,
	PORT,
});

export function createHtmlPlugin(options: object = {}) {
	const template = path.resolve('../static/index.html');
	const opts = { template, ...options };

	return new HtmlPlugin(opts);
}

export { HtmlPlugin, CssPlugin, TerserPlugin };
