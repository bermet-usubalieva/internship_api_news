import React, { FC } from 'react';

const SearchForm: FC = () => {
    return (
        <form>
            <input type="search" placeholder='News' />
            <button>Search</button>
        </form>
    );
};

export default SearchForm;