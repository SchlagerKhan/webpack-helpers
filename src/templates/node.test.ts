import { createDefaultConfig } from './default';

describe('Config - Node', () => {
	test('Create', () => {
		const config = createDefaultConfig({
			entry: 'entry',
			distDir: 'dist',
			distFile: 'file',
		});

		expect(config).toBeTruthy();
	});
});
