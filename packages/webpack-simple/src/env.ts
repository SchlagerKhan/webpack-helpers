// prettier-ignore
export const {
	NODE_ENV = 'development',
	RUNTIME_ENV = 'local',
	PORT: port = "3000"
} = process.env;

export const IS_DEV = NODE_ENV === 'development';
export const IS_PROD = NODE_ENV === 'production';

export const PORT = parseInt(port);
