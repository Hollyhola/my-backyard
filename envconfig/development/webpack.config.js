let commonConfig = require('../common/webpack.config.js');
let path = require('path');
let _ = require('lodash');
const rootDir = commonConfig.context;
let devConfig = {
    output: {
        path: path.join(rootDir, 'build', 'dev')
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        inline: true,
        port: 3001,
        host: '0.0.0.0',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        historyApiFallback: true
    },
}
let config = _.defaultsDeep(devConfig, commonConfig);
module.exports = config;