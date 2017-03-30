const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProvidePlugin = require('webpack').ProvidePlugin;
const rootDir = path.resolve(__dirname, '../../');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    performance: { hints: false },
    context: rootDir,
    entry: {
        polyfills: 'src/polyfills.browser.ts',
        vendor: 'src/vendor.browser.ts',
        main: 'src/main.ts',
    },
    resolve: {
        modules: [rootDir, 'node_modules', 'src/app'],
        extensions: ['.ts', '.js', '.json', '.css', '.styl', '.vue'],
        mainFiles: ['index', 'main'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    output: {
        path: path.join(rootDir, 'build', 'dev'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e|d)\.ts$/],
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    },
                    esModule: true
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'to-string-loader!css-loader'
            },
            {
                test: /\.styl(us)?$/,
                loader: 'raw-loader!stylus-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?limit=10240&name=assets/[hash].[ext]'
            }
        ]
    },
    plugins: [
        /**
         * Plugin: ContextReplacementPlugin
         * Description: Provides context to Angular's use of System.import
         * 
         * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
         * See: https://github.com/angular/angular/issues/11580
         */
        /*
         * Plugin: CopyWebpackPlugin
         * Description: Copy files and directories in webpack.
         *
         * Copies project static assets.
         *
         * See: https://www.npmjs.com/package/copy-webpack-plugin
         */
        new CopyWebpackPlugin([{
                from: 'src/assets',
                to: 'assets',
            },
            {
                from: 'src/assets/style',
                to: 'assets',
            }
        ]),
        /*
         * Plugin: CommonsChunkPlugin
         * Description: Shares common code between the pages.
         * It identifies common modules and put them into a commons chunk.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */
        new CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.bundle.js',
            chunks: ['main', 'polyfills', 'vendor'],
            minChunks: 2
        }),

        new ProvidePlugin({
            "jQuery": 'jquery',
            "Tether": 'tether',
            "window.Tether": 'tether',
            'pdfjsLib': 'pdfjs-dist',
        }),
        new HtmlWebpackPlugin({
            title: '后台管理系统',
            filename: 'index.html',
            template: 'src/index.html',
            inject: false
        }),
    ]
}