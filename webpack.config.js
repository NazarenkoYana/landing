const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const IS_PRODUCTION = process.env.NODE_ENV === "production";


module.exports = {
    entry: './src/index.js',
    mode: (IS_PRODUCTION) ? 'production' : 'development',
    devtool: (IS_PRODUCTION) ? undefined : "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        // publicPath: '/dist',
        // contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            scriptLoading: 'defer',
            // inject: false,
            static: false
        }),

    ]
};
