import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                // массив значений которые буду удалять
                const forbidden = state.opts.props || [];

                // traverse пройтись по всем нодам
                path.traverse({
                    // в ноде JSXIdentifier
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
