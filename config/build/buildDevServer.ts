import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // проксирование запроса, без него при обновление страницы если путь не '/' будет Cannot GET /about
        hot: true,
    };
}
