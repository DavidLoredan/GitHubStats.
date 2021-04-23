import '../reset.css';
import './scss/UserStats.scss';
import UserInfo from './UserInfo';
import UserStarsRepo from './UserStarsRepo';

function UserStats() {
  return (
    <div className="UserStats">
      <UserInfo />
      <UserStarsRepo />
    </div>
  );
}
export default UserStats;
