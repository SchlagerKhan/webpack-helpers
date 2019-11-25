import { IS_PROD } from './env';

export function getJsFile(includeHash?: boolean) {
	const withHash = IS_PROD || includeHash;

	return withHash ? 'index.[hash].js' : 'index.js';
}

export function getCssFile() {
	return IS_PROD ? 'styles.[hash].css' : 'styles.css';
}
