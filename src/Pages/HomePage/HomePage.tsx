import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { getNewsInUS } from '../../store/slices/newsSlices';
import Output from '../../components/Output/Output';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const HomePage: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getNewsInUS())
    }, [dispatch])
    return (
        <div>
            <Header />
            <Output />
            <Footer />
        </div>
    );
};

export default HomePage;
