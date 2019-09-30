import { Configuration } from 'webpack';

import { babelFileLoader } from '../loaders';

import { createNodeConfig, NodeOpts } from './node';

export function createTranspilerConfig(opts: NodeOpts, otherOpts?: Configuration): Configuration {
	const nodeConfig = createNodeConfig(opts, otherOpts);

	nodeConfig.module.rules = [babelFileLoader];

	return nodeConfig;
}
