import { createRenderServerConfig } from './render';

describe('Config - Render', () => {
	test('Create', () => {
		const fn = () => createRenderServerConfig();

		expect(fn).toThrow();
	});
});
