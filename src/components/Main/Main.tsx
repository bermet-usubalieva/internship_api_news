import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import ArticlePage from '../../Pages/ArticlePage/ArticlePage';
import s from './Main.module.css'

const Main: FC = () => {
    return (
        <main className={s.main}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/detail-news/:name' element={<ArticlePage />} />
            </Routes>
        </main>
    );
};

export default Main;