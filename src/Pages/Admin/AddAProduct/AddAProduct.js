import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddAProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

        const url = `http://localhost:5000/part`;
        console.log(url);
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
        });
  
        toast('Product Added Successfully')
      };

    return (
        <div className='container w-100 mx-auto'>
        <h1 className='review-title'>Add A Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Email' type="email" value={user?.email} {...register("email")} readOnly/>
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
            <textarea className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Desription' type="text" {...register("desription")} />
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Price' type="number" {...register("price")} />

            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Available Quantity' type="number" {...register("availablequantity")} />
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Minimum Order' type="text" {...register("minimunorder")} />
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Photo URL' type="text" {...register("img")} />
            <input className='login-button w-25 d-block mx-auto' type="submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddAProduct;