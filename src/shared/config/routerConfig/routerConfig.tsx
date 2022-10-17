import { RouteProps } from 'react-router-dom';
import path from 'path';
import React from 'react';
import { HomeAsync } from 'pages/Home';
import { AboutPageAsync } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN='main',
    ABOUT='about'
}

export const RoutesPaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
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
};
