import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPatch } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPatch = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'), // путь до файла index.js
        build: path.resolve(__dirname, 'build'), // путь до папки со сборкой
        html: path.resolve(__dirname, 'public', 'index.html'), // путь до файла index.html
    };

    const PORT = env?.port || 3000;
    const mode = env?.mode || 'development';
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
