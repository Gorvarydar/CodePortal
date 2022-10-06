import {lazy} from 'react'

// export const CounterAsync = lazy(() => import('./Counter'));
export const CounterAsync = lazy(() => new Promise(resolve => {
    setTimeout(function () {
        // @ts-ignore
        return resolve(import('./Counter'));
    }, 1500)
}))