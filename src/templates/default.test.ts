import { createDefaultConfig } from './default';

describe('Config - Default', () => {
	test('Create', () => {
		const config = createDefaultConfig({
			entry: 'entry',
			distDir: 'dist',
			distFile: 'file',
		});

		expect(config).toBeTruthy();
	});
});
