import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
const Dotenv = require('dotenv-webpack');

export function buildPlugins({
    paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new Dotenv()
    ];
}
