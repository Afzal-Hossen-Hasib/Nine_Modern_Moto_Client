import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPage/Loading/Loading';
import UserRow from '../UserRow/UserRow';

const User = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('https://aqueous-inlet-29591.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then (res=>res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container dashboard-content'>
            <h1 className='part-title'>All User</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

  <tbody>
    {
        users.map(user=> <UserRow
            key={user._id}
            user={user}
        >
            
        </UserRow>)
    }
    
  </tbody>
</table>
        </div>
    );
};

export default User;