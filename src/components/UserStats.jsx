import React from 'react';
import '../reset.css';
import StyledUserStats from './styledComponents/SuserStats';
import UserInfo from './UserInfo';
import UserStarsRepo from './UserStarsRepo';
import UserRepo from './UserRepo';
import UserRepoDate from './UserRepoDate';

function UserStats() {
  return (
    <StyledUserStats>
      <UserInfo />
      <UserRepo />
      <UserRepoDate />
      <UserStarsRepo />
    </StyledUserStats>
  );
}
export default UserStats;
