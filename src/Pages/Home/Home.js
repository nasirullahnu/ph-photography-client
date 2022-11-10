import React from 'react';
import Appoint from '../../HomeItems/Appoint/Appoint';
import Banner from '../../HomeItems/Banner/Banner';
import HomeServices from '../../HomeItems/HomeServices/HomeServices';
import Stat from '../../HomeItems/Stat/Stat';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Stat></Stat>
            <Appoint></Appoint>
        </div>
    );
};

export default Home;