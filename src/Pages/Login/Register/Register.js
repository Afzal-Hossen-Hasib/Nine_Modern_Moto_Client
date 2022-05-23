import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import signUp from "../../../Images/register/register.png";
import Loading from "../../SharedPage/Loading/Loading";
import "./Register.css";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let errorMessage;

  if (gLoading || eLoading || updating) {
    return <Loading></Loading>;
  }

  if (eError || gError || uError) {
    errorMessage = (
      <p className="text-danger">
        {eError?.message || gError?.message || uError?.message}
      </p>
    );
  }

  if (eUser || gUser) {
    console.log(eUser || gUser);
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="featured-title mt-3">Please Sign Up</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="left-cont">
            <img src={signUp} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-cont">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="label">
                  <span className="login-title">Name</span>
                </label>{" "}
                <br />
                <input
                  className="w-75 input-group-text"
                  type="text"
                  placeholder="Your Name"
                  id=""
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name Is Required",
                    },
                  })}
                />
                <label htmlFor="label">
                  {errors.name?.type === "required" && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </label>
              </div>

              <div>
                <label htmlFor="label">
                  <span className="login-title">Email</span>
                </label>{" "}
                <br />
                <input
                  className="w-75 input-group-text"
                  type="email"
                  placeholder="Your Email"
                  id=""
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide A Valid Email",
                    },
                  })}
                />
                <label htmlFor="label">
                  {errors.email?.type === "required" && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}

                  {errors.email?.type === "pattern" && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </label>
              </div>

              <div>
                <label htmlFor="label">
                  <span className="login-title">Password</span>
                </label>{" "}
                <br />
                <input
                  className="w-75 input-group-text"
                  type="password"
                  placeholder="Your Password"
                  id=""
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password Is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must Be 6 Characters Or Longer",
                    },
                  })}
                />
                <label htmlFor="label">
                  {errors.password?.type === "required" && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}

                  {errors.password?.type === "minLength" && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorMessage}
              <input
                className="w-50 d-block mb-3 login-button"
                type="submit"
                value="SignUp"
              />
            </form>

            <p className="create-title">
              Already Have An Account?{" "}
              <Link className="create-button" to="/login">
                Please Login
              </Link>
            </p>

            <div>
              <div className="d-flex align-items-center justify-content-center">
                <div style={{ height: "2px" }} className="w-50 bg-danger"></div>
                <p className="mt-3 mx-3 text-center create-title">OR</p>
                <div style={{ height: "2px" }} className="w-50 bg-danger"></div>
              </div>
              <button
                className="w-50 d-block mx-auto signup-button"
                onClick={() => signInWithGoogle()}
              >
                Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
