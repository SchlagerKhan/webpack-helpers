import { NODE_ENV, RUNTIME_ENV, PORT, IS_DEV, IS_PROD } from './env';

describe('Environment', () => {
	test('Default values', () => {
		expect(NODE_ENV).toBe('test');
		expect(RUNTIME_ENV).toBe('local');
		expect(PORT).toBe(3000);

		expect(IS_DEV).toBe(false);
		expect(IS_PROD).toBe(false);
	});
});
