export const {
	// prettier-ignore
	NODE_ENV = 'development',
	RUNTIME_ENV = 'local',
	PORT: port = '3000',
} = process.env;

export const IS_DEV = NODE_ENV === 'development';
export const IS_PROD = NODE_ENV === 'production';

export const PORT = parseInt(port);

export const DEFAULT_ENV: any = {
	NODE_ENV,
	RUNTIME_ENV,
	PORT,
};

export function setDefaultEnv(env: any) {
	Object.assign(DEFAULT_ENV, env);
}
