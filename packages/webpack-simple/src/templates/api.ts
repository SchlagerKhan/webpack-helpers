import { Configuration } from 'webpack';

import { createNodeConfig, BasicNodeOpts } from './node';

interface ApiOpts extends BasicNodeOpts {
	entry: string;
	path: string;
	publicPath?: string;
}

export function createApiConfig(opts: ApiOpts, otherOpts?: Configuration): Configuration {
	const filename = 'index.js';

	return createNodeConfig({ ...opts, filename }, otherOpts);
}
