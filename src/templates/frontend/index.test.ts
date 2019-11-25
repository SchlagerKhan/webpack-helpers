import { createFrontendConfig } from '.';

describe('Config - Frontend', () => {
	test('Create', () => {
		const config = createFrontendConfig({
			entry: 'entry',
			distDir: 'dist',
		});

		expect(config).toBeTruthy();
	});
});
