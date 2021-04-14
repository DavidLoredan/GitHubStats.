import '../reset.css';
import './UserStartRepo.scss';

function UserStartRepo() {
  return (
    <div>
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
    </div>
  );
}

export default UserStartRepo;
