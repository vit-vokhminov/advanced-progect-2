import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../../const/theme';

interface useThemeRedult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): useThemeRedult {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.NORMAL;
                break;
            case Theme.NORMAL:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.NORMAL;
        }
        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return { theme: theme || Theme.NORMAL, toggleTheme };
}
