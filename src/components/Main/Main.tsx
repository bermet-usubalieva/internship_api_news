import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import Details from '../../Pages/Details/Details';

const Main: FC = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/detail-news/:name' element={<Details />} />
            </Routes>
        </main>
    );
};

export default Main;