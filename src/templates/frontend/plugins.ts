import { CssPlugin, HtmlInjectPlugin, HtmlPlugin, HtmlRootPlugin } from '../../plugins';
import { getCssFile } from '../../helpers';

export function getPlugins(htmlOptions, htmlInject) {
	const plugins = [
		// prettier-ignore
		new CssPlugin({ filename: getCssFile() }),
		new HtmlPlugin(htmlOptions),
		new HtmlRootPlugin(),
	];

	if (htmlInject) {
		plugins.push(new HtmlInjectPlugin());
	}

	return plugins;
}
