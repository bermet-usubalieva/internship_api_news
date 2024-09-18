import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { News } from '../../store/slices/newsSlices';

const Details: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('pub'))
    return (
        <div>

        </div>
    );
};

export default Details;