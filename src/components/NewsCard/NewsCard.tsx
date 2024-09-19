import React, { FC } from 'react';
import { News } from '../../store/slices/newsSlices';
import { Link } from 'react-router-dom';
import s from './NewsCard.module.css'

const placeholderImage = 'https://via.placeholder.com/300';
const NewsCard: FC<News> = ({ author, content, publishedAt, title, urlToImage }) => {
    return (
        <Link className={s.card} to={`/detail-news/${encodeURIComponent(title)}?pub=${publishedAt}`}>
            <img src={urlToImage || placeholderImage} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
};

export default NewsCard;