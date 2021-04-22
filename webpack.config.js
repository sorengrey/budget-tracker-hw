const config = {
    entry: './public/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [new WebpackPwaManifest()]
};

module.exports = config;