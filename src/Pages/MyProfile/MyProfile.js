import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import './MyProfile.css'

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <h1 className="review-title">Profile</h1>
      <div className="profile-div">
        <div>
          <h6>Full Name: </h6>
          <h4>{user.displayName}</h4>
        </div>

        <div className="mt-5">
          <h6>Email Address:</h6>
          <h4>{user.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
