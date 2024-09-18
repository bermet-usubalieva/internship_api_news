import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import NewsCard from '../NewsCard/NewsCard';
import SearchForm from '../SearchForm/SearchForm';

const Output: FC = () => {
    const { news, loading } = useAppSelector(state => state.news)


    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <SearchForm />
            {
                news.length > 0 ?
                    news.map(el => <NewsCard key={el.publishedAt} {...el} />)
                    :
                    <h2>Not Fount</h2>
            }
        </section>
    );
};

export default Output;