import { RouteProps } from 'react-router-dom';
import React from 'react';
import { HomeAsync } from 'pages/Home';
import { AboutPageAsync } from 'pages/AboutPage';
import { NoFoundPage } from 'pages/NoFoundPage';

export enum AppRoutes {
    MAIN='main',
    ABOUT='about',
    NOT_FOUND='noFound'
}

export const RoutesPaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPaths.main,
        element: <HomeAsync />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPaths.about,
        element: <AboutPageAsync />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPaths.noFound,
        element: <NoFoundPage />,
    },
};
