import React from 'react';
import Spinner from 'shared/ui/Spinner/Spinner';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?:string;

}

const Loader = ({ className }:LoaderProps) => (
    <div className={classNames(cls.Loader, {}, [className])}>
        <Spinner />
    </div>
);

export default Loader;
