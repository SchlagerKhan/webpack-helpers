# What

A simple way to build webpack configs

# Why

Because creating creating a webpack config for each project is very much similar and cumbersome.

Also all the dependencies are cluttering the package.json. Of course this is not best practice, but for working with a project where webpack's sole purpose is to build the source files to a dist file with minimal customimzation it seems reasonable to create this abstraction that declutters the project a bit.

# Usage

# API

The following components are exported from `webpack-simple`.

## Loaders

Exports the following predefined loaders:

-   cssLoader
    -   A `css-loader` with `style-loader` in dev mode and `mini-css-extract-plugin` loader in prod
-   babelLoader
    -   Simply a `babel-loader`.
    -   Checks for `.js`, `.jsx`, `.ts`, `.tsx`,
-   babelFileLoader
    -   Prepends `file-loader` to the babelLoader above
-   imageLoader
    -   Uses `url-loader` and `image-webpack-loader`
    -   Checks for `.png`, `.svg`, `.jps`, `.gif`
-   manifestLoader
    -   Uses `file-loader`
    -   Checks for `.webmanifest`

## Plugins

Exports the following plugins:

-   CssPlugin (`mini-css-extract-plugin`)
-   TerserPlugin (`terser-webpack-plugin`)
-   HtmlPlugin (`html-webpack-plugin`)
-   HtmlRootPlugin (`html-wwebpack-root-plugin`)
-   HtmlInjectPlugin (`html-wwebpack-inject-plugin`)

And the following helpers

-   createEnvPlugin
    -   Takes in an object of environment variables
    -   Falls back on `NODE_ENV`, `RUNTIME_ENV`, `PORT`
-   createHtmlPlugin

# Environment

The package reads the environment variables with the following fallback values:

-   `NODE_ENV` = `'development'`
-   `RUNTIME_ENV` = `'local'`
-   `PORT` = `'3000'`

# Files

-   The files emitted by the webpack build (in dev/prod respectively) is the following:
    -   `index.js`/`index.[hash].js`
    -   `styles.css`/`styles.[hash].css`
    -   images with their source names

# Templates

The templates are the function one actually uses to create configs (if you don't want to puzzle them together from the components above). They are the following:

-   `createDefaultConfig`

    -   The default config that all other extends from. Takes in the following arguments:
        -   opts
            -   `entry`: string
            -   `distDir`: string;
            -   `distFile`: string;
            -   `env`: object
        -   config: Webpack configuration
    -   Mergen them and creates very basic config with:
        -   `mode`,
        -   `entry`
        -   `output`
        -   `resolve`
        -   `plugins`
        -   `stats`
        -   `devtool`
        -   `watchOptions`

-   `createNodeConfig`

    -   Extends from `createDefaultConfig`
    -   Also takes in the option `whitelist` that is injected into the `webpack-node-externals` package.
    -   Creates a config with:
        -   `target: node`
        -   \_\_dirname is set to false
        -   Includes the babel-loader
        -   minimization is set to false
        -   externals injected from `webpack-node-externals`

-   `createTranspilerConfig`

    -   Extends `createNodeConfig`
    -   Uses `babelFileLoader` instead of `babelLoader` in order to only transpile the files instead of creating a bundle.

-   `createApiConfig`

    -   Extends from `createNodeConfig`
    -   Creates a config where the output file is `index.js`

-   `createRenderConfig`

    -   Not implemented yet but the purpose of it is to create a config for a React SSR server.

-   `createFrontendConfig`
    -   Extends from `createDefaultConfig`
    -   Takes in the following arguments:
        -   `publicPath`: string
        -   `port` number - for the devServer
        -   `htmlOptions`
    -   Creates a config for frontend development including:
        -   Loaders: `babelLoader`, `cssLoader`, `imageLoader`, `manifestLoader`,
        -   Plugins:
            -   CssPlugin (`mini-css-extract-loader`)
            -
        -   DevServer
        -   Optimization
