import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Featured></Featured>
        </div>
    );
};

export default Home;