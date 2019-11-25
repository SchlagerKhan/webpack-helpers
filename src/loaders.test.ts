import { getStyleLoader } from './loaders';

describe('Loaders', () => {
	test('Style loader', () => {
		const styleLoader = getStyleLoader();

		expect(styleLoader).toBe('style-loader');
	});
});
