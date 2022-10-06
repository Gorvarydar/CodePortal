import React, {Suspense, useContext, useState} from 'react';
import { Route } from 'react-router';
import {Link, Routes} from 'react-router-dom';
import Counter from "./Counter";
import '../styles/index.scss'
import Home from "./Home/Home";
import {HomeAsync} from "./Home/HomeAsync";
import {CounterAsync} from "./Counter.Async";
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";


const App = () => {
const {themeToggle, theme} = useTheme()
    return (
        <div className={classNames('app',{hovered:true}, [theme])}>
            <Link to={'/counter'}>Counter</Link>
            <Link to={'/'}>Home</Link>
            <button onClick={themeToggle}>Theme toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/counter'} element={<CounterAsync/>}/>
                <Route path={'/'} element={<HomeAsync/>}/>
            </Routes>
        </Suspense>
        </div>
    );
};

export default App;