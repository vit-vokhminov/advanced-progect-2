import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;

    // Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
    theme?: ButtonTheme;

    // Флаг, делающий кнопку квадратной
    square?: boolean;

    // Размер кнопки в соответствии с дизайн системой
    size?: ButtonSize;

    // Флаг, отвечающий за работу кнопки
    disabled?: boolean;

    // Содержимое кнопки
    children?: ReactNode;
    // Увеличивает кнопку на всю свободную ширину
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        fullWidth,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s.square]: square,
        [s.disabled]: disabled,
        [s.fullWidth]: fullWidth,
        [s.disabled]: disabled,
        [s.fullWidth]: fullWidth,
    };

    return (
        <button
            type='button'
            className={classNames(s.Button, mods, [
                className,
                s[theme],
                s[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
