import '../reset.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StyledUserInfo from './styledComponents/SuserInfo';

function UserInfo() {
  const [user, setUser] = useState([]);
  const [activity, setActivity] = useState([]);
  const [formActivity, setFormActivity] = useState([]);
  const { login } = useParams();

  // Function calculat the number of days since the last connection
  function calculatActivity(data) {
    const saneData = { ...data };
    saneData.updated_at = data.updated_at;
    const userDateConnect = saneData.updated_at; // Date of the last connection
    const miliUserDateConnect = Date.parse(userDateConnect); // Time in miliseconds between the last connection and 01-01-1970
    const dateOfDay = new Date(); // Date of the day
    const miliDateOfDay = Date.parse(dateOfDay); //  Time in milliseconds between today and 01-01-1970
    const calOfDay =
      (miliDateOfDay - miliUserDateConnect) / (60 * 60 * 24 * 1000); // calculate the time elapsed between the last connection and today in days
    return calOfDay;
  }

  function accountCreationDate(data) {
    const saneData = { ...data };
    saneData.created_at = data.created_at.substring(0, 10);
    return saneData;
  }
  function formatActivity() {
    if (activity <= 7) return 'activityhight';
    if (activity <= 14) return 'activitymedium';
    if (activity <= 60) return 'activitylow';
    return 'activitynul';
  }
  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`).then(({ data }) => {
      const userActivity = calculatActivity(data);
      setActivity(userActivity);
      const saneData = accountCreationDate(data);
      setUser(saneData);
      const pictureActivity = formatActivity(data);
      setFormActivity(pictureActivity);
    });
  }, [login, formActivity]);

  return (
    <StyledUserInfo>
      <img className="userAvatar" srcSet={user.avatar_url} alt="Avatar" />

      <div className="userDetail">
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noreferrer"
          className="nameAndActivity"
        >
          <h1> {user.login} </h1>
          <img
            src={`../img/${formActivity}.png`}
            alt="image_activity"
            className="imgActivity"
          />
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
