import { createTranspilerConfig } from './transpile';

describe('Config - Transpile', () => {
	test('Create', () => {
		const config = createTranspilerConfig({
			entry: 'entry',
			distDir: 'dist',
		});

		expect(config).toBeTruthy();
	});
});
