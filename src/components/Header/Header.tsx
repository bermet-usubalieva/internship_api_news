import React, { FC } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import s from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={`${s.header} `}>
            <div className={s.container}>
                <h1 className={s.h1}>NEWSLETTER</h1>
                <SearchForm />
            </div>
        </header>
    );
};

export default Header;