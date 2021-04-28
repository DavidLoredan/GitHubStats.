import { useEffect, useState } from 'react';
import axios from 'axios';
import './UserStarsRepo.scss';

function UserRepo() {
  const [repolist, setRepolist] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/erriep/repos').then(({ data }) => {
      setRepolist(data);
    });
  }, []);

  return (
    <div>
      <p>Liste des repos (nom-description-techno)</p>
      <section className="UserStarsRepo">
        <div className="cardeList">
          {repolist
            .sort(function compare(a, b) {
              return b.size - a.size;
            })
            .slice(0, 5)
            .map((repo) => {
              return (
                <ul className="carde">
                  <div className="repoInfo">
                    <li className="repoName">{repo.name}</li>
                    <li className="repoDesc">{repo.description}</li>
                  </div>
                  <div className="repoTechno">
                    <li className={repo.language}>{repo.language}</li>
                  </div>
                </ul>
              );
            })}
        </div>
      </section>
    </div>
  );
}
export default UserRepo;
