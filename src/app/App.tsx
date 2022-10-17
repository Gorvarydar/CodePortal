import React, { Suspense } from 'react';
import './styles/index.scss';
import AppRouter from 'app/providers/Router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SideBar } from 'widgets/SideBar';

import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
