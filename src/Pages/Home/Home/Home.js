import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Featured from '../Featured/Featured';
import Parts from '../Parts/Parts';
import Review from '../Review/Review';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Featured></Featured>
            <Summary></Summary>
            <Review></Review>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;