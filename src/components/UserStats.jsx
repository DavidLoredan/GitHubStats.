import React from 'react';
import '../reset.css';
import './scss/UserStats.scss';
import UserInfo from './UserInfo';
import UserStarsRepo from './UserStarsRepo';
import UserRepo from './UserRepo';

function UserStats() {
  return (
    <div className="UserStats">
      <UserInfo />
      <UserStarsRepo />
      <UserRepo />
    </div>
  );
}
export default UserStats;
