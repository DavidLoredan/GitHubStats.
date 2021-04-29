import '../reset.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StyledUserInfo from './styledComponents/SuserInfo';

function UserInfo() {
  const [user, setUser] = useState([]);
  const { login } = useParams();

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`).then(({ data }) => {
      setUser(data);
    });
  }, [login]);

  return (
    <StyledUserInfo>
      <img className="userAvatar" srcSet={user.avatar_url} alt="Avatar" />

      <div className="userDetail">
        <h1 className="userName">{user.login} </h1>
        <p>{user.company} </p>
        <p>followers: {user.followers} </p>
        <p>following: {user.following} </p>
        <p>E-mail{user.email} </p>
        <p>Hireable{user.hireable} </p>
        <p>Created on: {user.created_at} </p>
      </div>
    </StyledUserInfo>
  );
}

export default UserInfo;
