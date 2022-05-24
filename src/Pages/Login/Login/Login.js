import React, { useEffect } from "react";
import login from "../../../Images/login/login.png";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useForm } from "react-hook-form";
import "./Login.css";
import Loading from "../../SharedPage/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        eLoading,
        eError,
      ] = useSignInWithEmailAndPassword(auth);

      const [token] = useToken(user || gUser);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let errorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
      if (token) {
        console.log(user || gUser);
        navigate(from, { replace: true });
    }
    } ,[token, from, navigate]);

    if (gLoading || eLoading) {
        return <Loading></Loading>
    }

    if(eError || gError) {
        errorMessage = <p className="text-danger">{eError?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword (data.email, data.password);
    };

  return (
    <div className="container">
      <h1 className="featured-title mt-3">Please Login</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="left-cont">
            <img src={login} alt="" />
          </div>
        </div>


        <div className="col-md-6">

        <div className="right-cont">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="label">
                <span className="login-title">Email</span>
            </label> <br />
            <input 
            className="w-75 input-group-text"
            type="email" placeholder="Your Email" id="" 
            {...register("email", {
                required: {
                    value: true,
                    message: 'Email Is Required'
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide A Valid Email'
                }
              })}
            />
            <label htmlFor="label">
            {errors.email?.type === 'required' && <span className="text-danger">
                {errors.email.message}
            </span> }
            
            {errors.email?.type === 'pattern' && <span className="text-danger">
                {errors.email.message}
            </span> }
            </label>
        </div>

        <div>
            <label htmlFor="label">
                <span className="login-title">Password</span>
            </label> <br />
            <input 
            className="w-75 input-group-text"
            type="password" placeholder="Your Password" id="" 
            {...register("password", {
                required: {
                    value: true,
                    message: 'Password Is Required'
                },
                minLength: {
                  value: 6,
                  message: 'Must Be 6 Characters Or Longer' 
                }
              })}
            />
            <label htmlFor="label">
              {errors.password?.type === 'required' && <span className="text-danger">
              {errors.password.message}
              </span> }
            
             {errors.password?.type === 'minLength' && <span className="text-danger">
              {errors.password.message}
              </span> }
            </label>
        </div>
              {errorMessage}
      <input className="w-50 d-block mb-3 login-button" type="submit" value="Login" />
    </form>

              
              <p className="create-title">New To Modern Moto? <Link className="create-button" to='/register'>Creat New Account</Link></p>

            <div>
              <div className="d-flex align-items-center justify-content-center">
                <div style={{ height: "2px" }} className="w-50 bg-danger"></div>
                <p className="mt-3 mx-3 text-center">OR</p>
                <div style={{ height: "2px" }} className="w-50 bg-danger"></div>
              </div>
              <button className="w-50 d-block mx-auto signup-button" onClick={() => signInWithGoogle()}>
                  Sign In With Google
              </button>
            </div>
        </div>

            
        </div>
      </div>
    </div>
  );
};

export default Login;
