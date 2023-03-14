import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BuildOptions } from './types/config';
const Dotenv = require('dotenv-webpack');

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),

        // с помошью DefinePlugin в приложение можно прокидывать глобальные переменные
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),

        // плагин для проверки кольцевых зависимостей
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),

        // проверка типов на стороне babel
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),

        new Dotenv(),
    ];

    if (isDev) {
        // HotModuleReplacementPlugin сомнительно работает с react компонентами, по этому добавил ReactRefreshWebpackPlugin
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin()); // для настройки: hot: true, в buildDevServer
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            })
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        );
        plugins.push(
            // путь до папки с переводами
            new CopyPlugin({
                patterns: [{ from: paths.locales, to: paths.buildLocales }],
            })
        );
    }

    return plugins;
}
