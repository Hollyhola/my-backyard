let commonConfig = require('../common/webpack.config.js');
let ngtools = require('@ngtools/webpack');
let path = require('path');
let _ = require('lodash');
const rootDir = commonConfig.context;
let prodConfig = {
    output: {
        path: path.join(rootDir, 'build', 'prod')
    },
    devtool: 'cheap-module-source-map',
    // plugins: [
    //     new ngtools.AotPlugin({
    //         tsConfigPath: path.join(rootDir, 'tsconfig.json')
    //     })
    // ]
}
let config = _.defaultsDeep(prodConfig, commonConfig);
config.plugins.push(new ngtools.AotPlugin({
    tsConfigPath: path.join(rootDir, 'tsconfig.aot.json'),
    typeChecking: false,
}));

module.exports = config; 
