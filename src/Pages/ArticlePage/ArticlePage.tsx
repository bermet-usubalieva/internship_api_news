import React, { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RooteState } from '../../store';
import { News } from '../../store/slices/newsSlices';
import s from './ArticlePage.module.css'

const Details: FC = () => {
    const { name } = useParams<{ name: string }>();
    const query = new URLSearchParams(useLocation().search);
    const pubDate = query.get('pub');

    const news = useSelector((state: RooteState) => state.news.news);

    if (!name || !pubDate) {
        return <h2>Required parameters are missing</h2>;
    }

    const article = news.find((n: News) =>
        n.title === decodeURIComponent(name) && n.publishedAt === pubDate
    );

    if (!article) {
        return <h2>Article not found</h2>;
    }

    return (
        <section className={s.section}>
            <h1 className={s.h1}>{article.title}</h1>
            <div className={s.wrap}>
                <div className={s.imgWrap}>
                    <img src={article.urlToImage} alt={article.title} />
                </div>
                <div className={s.textWrap}>
                    <p className={s.text}>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            </div>
        </section>
    );
};

export default Details;
