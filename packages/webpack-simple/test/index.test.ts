import * as simple from '@schlagerkhan/webpack-simple';

describe('Production', () => {
	test('Exports all functions', () => {
		expect(simple).not.toBeUndefined();
		expect(simple.createFrontendConfig).not.toBeUndefined();
	});
});
