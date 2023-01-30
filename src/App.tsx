import React, { Suspense, useContext } from 'react';
import './styles/index.scss';
import { Counter } from './components/Counter';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
