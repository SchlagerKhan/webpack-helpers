module.exports = {
	roots: ['<rootDir>/src'],
	testMatch: [
		// prettier-ignore
		"**/__tests__/**/*.+(ts|tsx|js)",
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};
