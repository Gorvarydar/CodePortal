import {lazy} from 'react'

// export const HomeAsync = lazy(() => import('./Home'));
export const HomeAsync = lazy(() => new Promise(resolve => {
    setTimeout(function () {
        // @ts-ignore
        return resolve(import('./Home'));
    }, 1500)
}))