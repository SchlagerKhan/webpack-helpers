import * as webpack from 'webpack';

import HtmlPlugin from 'html-webpack-plugin';
import HtmlRootPlugin from 'html-webpack-root-plugin';
import HtmlInjectPlugin from 'html-webpack-inject-plugin';

import CssPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { DEFAULT_ENV } from './env';

export { HtmlPlugin, HtmlRootPlugin, HtmlInjectPlugin, CssPlugin, TerserPlugin };

export function createEnvPlugin(env) {
	return new webpack.EnvironmentPlugin(env || DEFAULT_ENV);
}

export function createHtmlPlugin(opts) {
	return new HtmlPlugin(opts);
}
