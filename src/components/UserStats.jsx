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
      <UserStarsRepo />
      <UserRepo />
      <UserRepoDate />
    </div>
  );
}
export default UserStats;
