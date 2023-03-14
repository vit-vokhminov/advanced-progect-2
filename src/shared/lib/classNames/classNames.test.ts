import { classNames } from './classNames';

describe('classNames', () => {
    test('Передать одно строковый класс', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('Строковый class и доп параметры', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected
        );
    });
    test('Строковый class, моды в true и доп параметры', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });
    test('Один mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });
    test('Один mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
            ])
        ).toBe(expected);
    });
});
