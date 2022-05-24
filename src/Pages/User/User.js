import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPage/Loading/Loading';
import UserRow from '../UserRow/UserRow';

const User = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then (res=>res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container'>
            <h1>User: {users.length}</h1>
            <table class="table">
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