import '../reset.css';
import './UserInfo.scss';

function UserInfo() {
  return (
    <div>
      <p className="user">John Doe</p>
      <section className="UserInfo">
        <img
          src="https://avatars.githubusercontent.com/u/47313528?v=4"
          alt="User avatar"
        />
        <ul className="userInfo">
          <li>
            <span className="followers">42</span> followers
          </li>
          <li>
            <span className="following">4</span> following
          </li>
          <li>
            <span className="numberOfRepository">413</span> repository
          </li>
          <li>john.do@contact.io</li>
        </ul>
      </section>
    </div>
  );
}

export default UserInfo;
