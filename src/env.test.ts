import { NODE_ENV, RUNTIME_ENV, PORT, IS_DEV, IS_PROD, setDefaultEnv, DEFAULT_ENV } from './env';

describe('Environment', () => {
	test('Default values', () => {
		expect(NODE_ENV).toBe('test');
		expect(RUNTIME_ENV).toBe('local');
		expect(PORT).toBe(3000);

		expect(IS_DEV).toBe(false);
		expect(IS_PROD).toBe(false);
	});
	test('Default Env', () => {
		setDefaultEnv({ TEST_PORT: 1234 });

		expect(DEFAULT_ENV.TEST_PORT).toBe(1234);
	});
});
