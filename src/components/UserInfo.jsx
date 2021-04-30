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
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noreferrer"
        >
          <h1> {user.login} </h1>
        </a>
        <p>{user.company} </p>
        <a
          href={`https://github.com/${login}?tab=followers`}
          target="_blank"
          rel="noreferrer"
        >
          <p>Followers: {user.followers} </p>
        </a>
        <a
          href={`https://github.com/${login}?tab=following`}
          target="_blank"
          rel="noreferrer"
        >
          <p>Following: {user.following} </p>
        </a>
        <p>Created at: {user.created_at} </p>
      </div>
    </StyledUserInfo>
  );
}

export default UserInfo;
