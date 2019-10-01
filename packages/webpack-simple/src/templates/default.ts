import 'webpack-dev-server';
import { Configuration } from 'webpack';
import * as merge from 'webpack-merge';

import { NODE_ENV } from '../env';

import { envPlugin } from '../plugins';
import { stats, devtool } from '../misc';

export interface DefaultOpts {
	entry: string;
	path: string;
	publicPath?: string;
	filename: string;
}

export function createDefaultConfig(opts: DefaultOpts, otherOpts?: Configuration): Configuration {
	const { entry, filename, path, publicPath = '/' } = opts;

	return merge.smart(
		{
			// @ts-ignore
			mode: NODE_ENV,
			entry,
			output: {
				filename,
				path,
				publicPath,
			},
			resolve: {
				extensions: ['.js', '.ts', '.tsx'],
			},
			plugins: [envPlugin],
			stats,
			devtool,
			watchOptions: { aggregateTimeout: 500 },
		},
		otherOpts,
	);
}
