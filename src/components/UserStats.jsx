import '../reset.css';
import './UserStats.scss';

function UserStats() {
  return (
    <div className="UserStatsGlobal">
      <p className="user">John Doe</p>
      <section className="profilBlock" id="blockOne">
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

      <section className="starsRepoBlock" id="block">
        <p>Stars&apos;s Repo</p>
        <div id="repoList">
          <ul>
            <li id="oneLine">
              <span>Name of first repo stars</span>
              <div className="langageUse">
                <p>HTML</p>
                <div className="htmlCircle"> </div>
              </div>
            </li>
            <li id="oneLine">
              <span>Name of second repo stars</span>
              <span>Techno used</span>
            </li>
            <li id="oneLine">
              <span>Name of third repo stars</span>
              <span>Techno used</span>
            </li>
            <li id="oneLine">
              <span>Name of fourth repo stars</span>
              <span>Techno used</span>
            </li>
            <li id="oneLine">
              <span>Name of fifth repo stars</span>
              <span>Techno used</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="lastRepoBlock" id="block">
        <p>Last Repo</p>
        <div id="repoList">
          <ul>
            <li id="oneLine">
              <span>Repository</span>
              <span>Techno used</span>
            </li>
            <li id="oneLine">
              <span>Repository</span>
              <span>Techno used</span>
            </li>
            <li id="oneLine">
              <span>Repository</span>
              <span>Techno used</span>
            </li>
            <li id="oneLine">
              <span>Repository</span>
              <span>Techno used</span>
            </li>
            <li id="oneLine">
              <span>Repository</span>
              <span>Techno used</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="contributeRepoBlock" id="block">
        <p>Contribute Repo</p>
      </section>
    </div>
  );
}
export default UserStats;
