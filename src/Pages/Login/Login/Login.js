import React from "react";
import login from "../../../Images/login/login.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        console.log(data)
    };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="left-cont">
            <img src={login} alt="" />
          </div>
        </div>
        <div className="col-md-6">

        <div>
            <label htmlFor="label">
                <span>Email</span>
            </label>
            <input 
            type="email" placeholder="Your Email" id="" 
            {...register("email", {
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'error message'
                }
              })}
            />

        </div>


        <form onSubmit={handleSubmit(onSubmit)}>
      <input  />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      
      <input type="submit" />
    </form>




          <div>
            <div className="d-flex align-items-center justify-content-center">
              <div style={{ height: "2px" }} className="w-50 bg-danger"></div>
              <p className="mt-3 mx-3 text-center">OR</p>
              <div style={{ height: "2px" }} className="w-50 bg-danger"></div>
            </div>
            <button onClick={() => signInWithGoogle()}>
                Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
