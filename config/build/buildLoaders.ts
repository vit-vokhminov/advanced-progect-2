import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    // https://react-svgr.com/docs/options/
    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true, // дефолтный размер 1em
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                // замена зашитого цвета fill в svg на currentColor
                                currentColor: true,
                            }
                        }
                    ]
                }
            }
        }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource',
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const cssLoader = buildCssLoader(isDev);
    
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        //typescriptLoader,
        cssLoader,
    ];
}
