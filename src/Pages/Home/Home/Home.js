import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Featured from '../Featured/Featured';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Featured></Featured>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;