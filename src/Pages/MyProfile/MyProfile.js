import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import './MyProfile.css'

const MyProfile = () => {

  const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

        const url = `https://aqueous-inlet-29591.herokuapp.com/profile`;
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
  
        toast('Information Added Successfully')
      };


  return (
    <div className="container">
      <h1 className="review-title">Profile</h1>
      <div className="profile-div">
        <div className="text-center">
          <h6>Full Name: </h6>
          <h4>{user.displayName}</h4>
        </div>

        <div className="mt-5 text-center">
          <h6>Email Address:</h6>
          <h4>{user.email}</h4>
        </div>
      </div>

      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            
            <textarea className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Education' type="text" {...register("education")} />
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Phone Number' type="number" {...register("phonenumber")} />
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='Photo URL' type="text" {...register("img")} />
            <input className='w-50 d-block mx-auto mb-5 input-group-text' placeholder='LinkedIn profile link' type="text" {...register("link")} />
            <input className='login-button w-25 d-block mx-auto' type="submit" value="Add Item" />
    </form>
    </div>
  );
};

export default MyProfile;
