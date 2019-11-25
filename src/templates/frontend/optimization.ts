import { Configuration } from 'webpack';
import { TerserPlugin } from '../../plugins';

export const optimization: Configuration['optimization'] = {
	minimizer: [
		new TerserPlugin({
			cache: true,
			parallel: true,
			sourceMap: true,
			terserOptions: {
				keep_classnames: true,
			},
		}),
	],
	moduleIds: 'hashed',
	runtimeChunk: 'single',
	splitChunks: {
		cacheGroups: {
			vendor: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendors',
				chunks: 'all',
			},
		},
	},
};
