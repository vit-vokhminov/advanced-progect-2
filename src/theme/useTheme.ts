import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeRedult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeRedult {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
