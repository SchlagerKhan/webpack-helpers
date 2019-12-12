import { CssPlugin, HtmlInjectPlugin, HtmlPlugin, HtmlRootPlugin } from '../../plugins';
import { getCssFile } from '../../helpers';

export function getPlugins(_htmlOptions, htmlInject) {
	const htmlOptions = Object.assign({ title: '' }, _htmlOptions);

	const plugins = [
		// prettier-ignore
		new CssPlugin({ filename: getCssFile() }),
		new HtmlPlugin(htmlOptions),
		new HtmlRootPlugin(),
	];

	if (htmlInject) {
		plugins.push(
			new HtmlInjectPlugin({
				externals: htmlInject,
			}),
		);
	}

	return plugins;
}
