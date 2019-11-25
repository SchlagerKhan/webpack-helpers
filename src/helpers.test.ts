import { getJsFile, getCssFile } from './helpers';

describe('Helpers', () => {
	test('Files', () => {
		const js = getJsFile();
		const jsHash = getJsFile(true);

		const css = getCssFile();

		expect(js).toBe('index.js');
		expect(jsHash).not.toBe('index.js');
		expect(css).toBe('styles.css');
	});
});
