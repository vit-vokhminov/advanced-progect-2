import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('Передача текста в кнопку', () => {
        render(<Button>TEST</Button>);
        // получить элемент по тексту 'TEST'
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Передача класса в кнопку', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        // получить элемент по тексту 'TEST'
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
