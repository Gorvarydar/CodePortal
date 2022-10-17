import React, { Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import HomeAsync from 'pages/Home/ui/HomeAsync';
import AboutPageAsync from 'pages/AboutPage/ui/AboutPageAsync';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => {
    console.log(routerConfig, 'routerconfig');
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route
                        path={path}
                        key={path}
                        element={(

                            <div className="page-wrapper">
                                {element}
                            </div>

                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
