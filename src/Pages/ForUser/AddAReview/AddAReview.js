import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddAReview = () => {

    const [user] = useAuthState(auth);
    const {register, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        const url = `https://aqueous-inlet-29591.herokuapp.com/review`
        fetch (url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then (res => res.json())
        .then (result => {
            console.log(result);
        })
        e.target.reset();
    };

    return (
        <div className='container dashboard-content'>
            <h1 className="review-title">Please Say Something</h1>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-50 d-block mx-auto input-group-text" placeholder='Your Name'  {...register("name")} required /> <br />
                    <input className="w-50 d-block mx-auto input-group-text" placeholder='Rating'  {...register("number")} required /> <br />
                    <input className="w-50 d-block mx-auto input-group-text" placeholder='Image Link'  {...register("img")} required /> <br />
                    <textarea className="w-50 d-block mx-auto input-group-text" placeholder='Short Review'  {...register("review")} required /> <br />
                    <button className="w-50 d-block mx-auto mb-3 login-button" type="submit">Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddAReview;