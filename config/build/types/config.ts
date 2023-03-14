export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string; // путь до файла index.js
    build: string; // путь до папки со сборкой
    html: string; // путь до файла index.html
    src: string; // путь до папки с исходным кодом (alias)
    locales: string; // для файлов с переводами
    buildLocales: string; // для файлов с переводами
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number | string;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}
