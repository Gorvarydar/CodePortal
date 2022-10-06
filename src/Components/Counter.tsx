import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [state, setState] = useState(0)

    const incrFoo = () => {
        setState(() => state + 1)
    }
    const decrFoo = () => {
        setState(() => state + 1)
    }

    return (
        <div className={classes.wrapper}>
            <h1>{state}</h1>
            <button onClick={incrFoo}>+</button>
            <button onClick={decrFoo}>-</button>
        </div>
    );
};

export default Counter;