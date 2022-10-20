import { classNames } from './classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional param', () => {
        const expected = 'someClass some1 some2';
        expect(classNames('someClass', {}, ['some1', 'some2'])).toBe(expected);
    });
    test('with all param', () => {
        const expected = 'someClass some1 some2 scroll';
        expect(classNames('someClass', { scroll: true }, ['some1', 'some2'])).toBe(expected);
    });
    test('with undef param', () => {
        const expected = 'someClass some1 some2';
        expect(classNames('someClass', { scroll: undefined }, ['some1', 'some2'])).toBe(expected);
    });
});
