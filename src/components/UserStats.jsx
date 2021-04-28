import React from 'react';
import '../reset.css';
import './styledComponents/UserStats.scss';
import UserInfo from './UserInfo';
import UserStarsRepo from './UserStarsRepo';
import UserRepo from './UserRepo';
import UserRepoDate from './UserRepoDate';

function UserStats() {
  return (
    <div className="UserStats">
      <UserInfo />
      <UserRepo />
      <UserRepoDate />
      <UserStarsRepo />
    </div>
  );
}
export default UserStats;
