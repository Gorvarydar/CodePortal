import React, { Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import Loader from 'widgets/Loader/ui/Loader';
import Spinner from 'shared/ui/Spinner/Spinner';

const AppRouter = () => {
    console.log(routerConfig, 'routerconfig');
    return (

        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    path={path}
                    key={path}
                    element={(
                        <div className="page-wrapper">
                            <Suspense fallback={<Loader />}>
                                {element}
                            </Suspense>
                        </div>
                    )}
                />
            ))}
        </Routes>

    );
};

export default AppRouter;
