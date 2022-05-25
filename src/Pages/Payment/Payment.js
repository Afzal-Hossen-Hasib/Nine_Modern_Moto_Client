import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import userEvent from '@testing-library/user-event';
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
    const url = `http://localhost:5000/myorder/${id}`;

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
            <div class="card">
  <div class="card-body">
      <h3>Hello {user.displayName}</h3>
    <h5 class="card-title">Please For: {data.name}</h5>
    <p class="card-text">Please Pay: ${data.price}</p>
    
  </div>
</div>

<div class="card">
  <div class="card-body">
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
    
  </div>
</div>
        </div>
    );
};

export default Payment;