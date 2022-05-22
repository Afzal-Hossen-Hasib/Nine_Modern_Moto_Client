import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const {partId} = useParams();

    return (
        <div>
            <h2>Purchase: {partId}</h2>
        </div>
    );
};

export default Purchase;