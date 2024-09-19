import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import NewsCard from '../NewsCard/NewsCard';
import s from './Output.module.css'

const Output: FC = () => {
    const { news, loading } = useAppSelector(state => state.news)


    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <section className={s.cardWrap}>
            {
                news.length > 0 ?
                    news.map(el => <NewsCard key={`${el.publishedAt}-${el.url}`} {...el} />)
                    :
                    <h2>Not Fount</h2>
            }
        </section>
    );
};

export default Output;