import { Configuration } from 'webpack';

import { babelFileLoader } from '../loaders';

import { createNodeConfig, NodeOpts } from './node';

export type TranspilerOpts = Omit<NodeOpts, 'distFile'>;

export function createTranspilerConfig(transpilerOpts: TranspilerOpts, otherOpts?: Configuration): Configuration {
	const defaultOpts = Object.assign({}, transpilerOpts, { distFile: 'none' });
	const nodeConfig = createNodeConfig(defaultOpts, otherOpts);

	nodeConfig.module.rules = [babelFileLoader];

	return nodeConfig;
}
