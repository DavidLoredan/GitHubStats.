import '../reset.css';
import './UserLastRepo.scss';

function UserLastRepo() {
  return (
    <div>
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
    </div>
  );
}

export default UserLastRepo;
