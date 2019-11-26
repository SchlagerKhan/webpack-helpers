import { Configuration } from 'webpack';

import { createNodeConfig, BasicNodeOpts } from './node';

interface ApiOpts extends BasicNodeOpts {}

export function createApiConfig(apiOpts: ApiOpts, otherOpts?: Configuration): Configuration {
	const distFile = 'index.js';
	const opts = Object.assign({}, apiOpts, { distFile });

	return createNodeConfig(opts, otherOpts);
}
