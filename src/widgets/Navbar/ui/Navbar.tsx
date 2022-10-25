import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutesPaths } from 'shared/config/routerConfig/routerConfig';
import { BugButton } from 'app/providers/ErorrBoundary';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string;
}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={RoutesPaths.about}>{t('О сайте')}</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={RoutesPaths.main}>{t('Главная')}</AppLink>
            <BugButton />
        </div>
    );
};
