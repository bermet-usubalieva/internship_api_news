import React, { FC } from 'react';
import { News } from '../../store/slices/newsSlices';
import { Link } from 'react-router-dom';


const NewsCard: FC<News> = ({ author, content, publishedAt, title, urlToImage }) => {
    return (
        <Link to={`/detail-news/${author}?pub=${publishedAt}`}>
            <img width={300} src={urlToImage} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
};

export default NewsCard;