import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedPage/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3INSIwTos1xk8ThQNqWiFjouz1KT4MQoJGMyXWHpFuwRj61uepF4XPyH9zsEWBJPjynQAxip7e1D83MBvvlvoL00D6hoPG97');

const Payment = () => {
    const {id} = useParams ();
    const [user] = useAuthState(auth)
    const url = `https://aqueous-inlet-29591.herokuapp.com/myorder/${id}`;

    const {data, isLoading} = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container'>
            <div className="card">
  <div className="card-body">
      <h3>Hello {user.displayName}</h3>
    <h5 className="card-title">Please For: {data.name}</h5>
    <p className="card-text">Please Pay: ${data.price}</p>
    
  </div>
</div>

<div className="card mt-5">
  <div className="card-body">
  <Elements stripe={stripePromise}>
    <CheckoutForm data={data}/>
  </Elements>
    
  </div>
</div>
        </div>
    );
};

export default Payment;