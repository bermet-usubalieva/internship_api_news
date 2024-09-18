import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { getNewsInUS } from '../../store/slices/newsSlices';
import Output from '../../components/Output/Output';


const HomePage: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getNewsInUS())
    }, [dispatch])
    return (
        <div>
            <Output />
        </div>
    );
};

export default HomePage;
