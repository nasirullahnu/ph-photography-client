import React from 'react';
import Banner from '../../HomeItems/Banner/Banner';
import HomeServices from '../../HomeItems/HomeServices/HomeServices';
import Stat from '../../HomeItems/Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Stat></Stat>
        </div>
    );
};

export default Home;