import { useEffect, useState } from 'react';
import axios from 'axios';
import './scss/UserStatsStyle.scss';
import { useParams } from 'react-router-dom';

function UserRepo() {
  const [repolist, setRepolist] = useState([]);
  const { login } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}/repos`)
      .then(({ data }) => {
        setRepolist(data);
      });
  }, [login]);

  return (
    <div>
      <section className="UserStarsRepo">
        <p>The five biggest repos</p>
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
