import '../reset.css';
import './UserStartRepo.scss';

function UserStartRepo() {
  return (
    <div>
      <section className="UserStartRepo">
        <p>Stars&apos;s Repo</p>
        <div className="repoList">
          <ul>
            <li className="oneLine">
              <span>Name of first repo stars</span>
              <div className="langageUse">
                <p>HTML</p>
                <div className="htmlCircle"> </div>
              </div>
            </li>
            <li className="oneLine">
              <span>Name of second repo stars</span>
              <span>Techno used</span>
            </li>
            <li className="oneLine">
              <span>Name of third repo stars</span>
              <span>Techno used</span>
            </li>
            <li className="oneLine">
              <span>Name of fourth repo stars</span>
              <span>Techno used</span>
            </li>
            <li className="oneLine">
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
