import '../reset.css';
import './UserStats.scss';
import UserInfo from './UserInfo';
import UserStarsRepo from './UserStarsRepo';
import UserRepoDate from './UserRepoDate';

function UserStats() {
  return (
    <div className="UserStats">
      <UserInfo />
      <UserStarsRepo />
      <UserRepoDate />
    </div>
  );
}
export default UserStats;
