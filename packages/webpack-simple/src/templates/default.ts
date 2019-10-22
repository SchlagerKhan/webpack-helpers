import 'webpack-dev-server';
import { Configuration } from 'webpack';
import * as merge from 'webpack-merge';

import { NODE_ENV } from '../env';

import { createEnvPlugin } from '../plugins';
import { stats, devtool } from '../misc';

export interface BasicOpts {
	entry: string;
	path: string;
	env?: {
		[key: string]: any;
	};
}

export interface DefaultOpts extends BasicOpts {
	filename: string;
}

export function createDefaultConfig(opts: DefaultOpts, otherOpts?: Configuration): Configuration {
	const { entry, filename, path, env } = opts;
	const envPlugin = createEnvPlugin(env);

	return merge.smart(
		{
			// @ts-ignore
			mode: NODE_ENV,
			entry,
			output: {
				filename,
				path,
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
