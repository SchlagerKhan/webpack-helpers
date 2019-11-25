import { createApiConfig } from './api';

describe('Config - Default', () => {
	test('Create', () => {
		const config = createApiConfig({
			entry: 'entry',
			distDir: 'dist',
		});

		expect(config).toBeTruthy();
	});
});
