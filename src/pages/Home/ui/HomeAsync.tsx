import React, { Suspense } from 'react';

const HomeAsync = React.lazy(() => import('./Home'));

export default HomeAsync;
