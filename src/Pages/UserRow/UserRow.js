import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user}) => {
    const {email} = user;
    const makeAdmin =() => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then (res => {
          if (res.status === 403) {
            toast.error ('Failed To Make An Admin');
          }
          return res.json()})
        .then (data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success ('Successfully Made An Admin');
            }
        })
    }
  return (
    <tr>
      <th scope="row">1</th>
      <td>{email}</td>
      <td><button className="btn btn-info" onClick={makeAdmin}>Make Admin</button></td>
    </tr>
  );
};

export default UserRow;
