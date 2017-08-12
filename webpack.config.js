const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './public/bundle.js'
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};
