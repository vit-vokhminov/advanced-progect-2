import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock/register',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: webpack.Configuration) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
    
        // решение проблемы, что entitiles пытается искать в node_modules
        //config!.resolve!.modules!.push(paths.src);
        config!.resolve!.modules = [paths.src, 'node_modules'];
    
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            // старые алиасы которые могли быть в webpack кофиге самого сторибука
            ...config!.resolve!.alias,
            // свой алиас
            '@': paths.src,
        };
    
        // @ts-ignore
        config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
            // в storybook есть свой лоадер на svg, но собака не работает, по этому его отключу
            // настройки лоадеров в storybook такие же как и в buildLoaders
            // если регулярка правила содержит svg
            if (/svg/.test(rule.test as string)) {
                // верну новый объект, в него разверну старое правило, но добавляю правило exclude,
                // через которое исключу файл svg, т.е. дефолтный лоадер storybook не будет обрабатывать svg
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    
        // для svg использую своё правило
        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    
        config!.module!.rules.push(buildCssLoader(true));
    
        // плагин для сборки storybook
        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            })
        );
    
        return config;
    },
};
