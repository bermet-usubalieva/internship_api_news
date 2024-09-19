import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { searchNews } from '../../store/slices/newsSlices';
import s from './SearchForm.module.css'

const SearchForm: FC = () => {
    const [query, setQuery] = useState('');
    const [sortBy, setSortBy] = useState<string | undefined>(undefined);

    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.news.loading);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query) {
            dispatch(searchNews({ query, sortBy }));
        }
    };

    return (
        <form className={s.form} onSubmit={handleSearch}>
            <input
                className={s.inp}
                type="search"
                placeholder='News'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={s.btn} type="submit" disabled={loading}>Search</button>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value || undefined)}
            >
                <option value="">Select sort option</option>
                <option value="popularity">Popularity</option>
                <option value="publishedAt">Published At</option>
                <option value="relevancy">Relevancy</option>
            </select>
            {loading && <div>Loading...</div>}
        </form>
    );
};

export default SearchForm;
