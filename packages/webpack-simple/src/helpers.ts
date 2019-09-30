import { IS_PROD } from './env';

// HELPERS
export function getJsFile(includeHash?: boolean) {
	if (!IS_PROD && !includeHash) return 'index.js';

	return 'index.[hash].js';
}

export function getCssFile() {
	if (!IS_PROD) return 'styles.css';

	return 'styles.[hash].css';
}
