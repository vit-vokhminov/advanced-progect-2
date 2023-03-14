import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'), // путь до файла index.js
        build: path.resolve(__dirname, 'build'), // путь до папки со сборкой
        html: path.resolve(__dirname, 'public', 'index.html'), // путь до файла index.html
        src: path.resolve(__dirname, 'src'), // путь до папки с исходным кодом (alias)
        locales: path.resolve(__dirname, 'public', 'locales'), // путь до папки с переводами
        buildLocales: path.resolve(__dirname, 'build', 'locales'), // путь до папки с переводами
    };

    const PORT = env?.port || 3000;
    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
