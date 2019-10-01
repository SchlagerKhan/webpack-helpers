import { Configuration } from 'webpack';

import { createNodeConfig } from './node';

interface ApiOpts {
	entry: string;
	path: string;
	publicPath?: string;
}

export function createApiConfig(opts: ApiOpts, otherOpts?: Configuration): Configuration {
	const filename = 'index.js';

	return createNodeConfig({ ...opts, filename }, otherOpts);
}
