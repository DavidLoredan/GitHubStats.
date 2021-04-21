import { useEffect, useState } from 'react';
import axios from 'axios';
import './scss/UserStatsStyle.scss';

function UserRepoDate() {
  const [repolist, setRepolist] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/erriep/repos').then(({ data }) => {
      setRepolist(data);
    });
  }, []);

  return (
    <div>
      <p>Liste des 5 repos les plus récents(nom-date-de création-langage)</p>
      <section className="UserStarsRepo">
        <div className="cardeList">
          {repolist
            .sort(function compare(a, b) {
              return Date.parse(b.created_at) - Date.parse(a.created_at);
            })
            .slice(0, 5)
            .map((repo) => {
              return (
                <ul className="carde">
                  <div className="repoInfo">
                    <li className="repoName">{repo.name}</li>
                    <li className="repoDesc">{repo.created_at}</li>
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
export default UserRepoDate;
