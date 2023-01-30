export type BuildMode = 'production' | 'development';

export interface BuildPatch {
    entry: string; // путь до файла index.js
    build: string; // путь до папки со сборкой
    html: string; // путь до файла index.html
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPatch;
    isDev: boolean;
    port: number | string;
}
