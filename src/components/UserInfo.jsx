import '../reset.css';
import './UserInfo.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`https://api.github.com/users/bdtkevin`).then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div className="UserInfo">
      <img className="userAvatar" srcSet={users.avatar_url} alt="Avatar" />
      <></>
      <div className="userDetail">
        <h1 className="userName">{users.name} </h1>
        <p>{users.company} </p>
        <p>{users.followers} </p>
        <p>{users.following} </p>
        <p>{users.email} </p>
        <p>{users.hireable} </p>
      </div>
    </div>
  );
}

export default UserInfo;
