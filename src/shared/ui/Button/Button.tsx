import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

enum ButtonTheme {
    DEFAULT='default'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    theme?:string;
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        children, className, theme = ButtonTheme.DEFAULT, ...otherProps
    } = props;
    return (
        <button type="button" className={classNames(cls.Button, {}, [className, cls.default])} {...otherProps}>
            {children}
        </button>
    );
};
