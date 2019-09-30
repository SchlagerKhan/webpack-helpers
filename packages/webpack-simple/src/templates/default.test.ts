import { createDefaultConfig } from './default';

describe('Config - Default', () => {
	test('Create', () => {
		const config = createDefaultConfig({
			entry: 'entry',
			path: 'path',
			filename: 'filename',
		});

		expect(config).toBeTruthy();
	});
});
