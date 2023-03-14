import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';

interface useThemeRedult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeRedult {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const toggleTheme = () => {
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
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.NORMAL, toggleTheme };
}
