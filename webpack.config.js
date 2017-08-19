var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx',
        './src/assets/lib/annyang.min.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.(wav|mp3|m4a)$/,
                loader: "file-loader?name=/assets/sounds/[name].[ext]",
                options:  {
                    emitFile: true
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'mp3']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
