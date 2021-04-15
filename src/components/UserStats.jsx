import '../reset.css';
import './UserStats.scss';
import UserInfo from './UserInfo';
import UserStarsRepo from './UserStarsRepo';
import UserLastRepo from './UserLastRepo';

function UserStats() {
  return (
    <div className="UserStats">
      <UserInfo />
      <UserStarsRepo />
      <UserLastRepo />
    </div>
  );
}
export default UserStats;
