import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?:string;
}

export const SideBar = ({ className }:SideBarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const sideBarToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <button
                onClick={sideBarToggle}
                type="button"
            >
                SIDEBAR
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
