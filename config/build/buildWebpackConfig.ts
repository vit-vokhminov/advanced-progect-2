import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevserver';

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoader(),
        },
        resolve: buildResolvers(),
        // inline-source-map покажет файл где в коде произошла ошибка
        devtool: isDev ? 'inline-source-map' : undefined, // в prod сборке не будет комментариев sourceMap
        devServer: isDev ? buildDevServer(options) : undefined, // в prod не будет запускаться devServer
    };
}
