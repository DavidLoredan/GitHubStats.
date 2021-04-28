import React from 'react';
import '../reset.css';
import StyledUserStats from './styledComponents/SuserStats';
import UserInfo from './UserInfo';
import UserStarsRepo from './UserStarsRepo';
import UserRepo from './UserRepo';

function UserStats() {
  return (
    <StyledUserStats>
      <UserInfo />
      <UserStarsRepo />
      <UserRepo />
    </StyledUserStats>
  );
}
export default UserStats;
