import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NoFoundPage.module.scss';

const NoFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage)}>
            <h1>{t('Страница не найдена')}</h1>
        </div>
    );
};

export default NoFoundPage;
