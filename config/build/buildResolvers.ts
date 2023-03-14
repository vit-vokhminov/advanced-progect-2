import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'], // alias
        mainFiles: ['index'], // для каждого файла будет являться главным файлом
        alias: {
            '@': options.paths.src, // alias
        },
    };
}
