import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StyledUserRepo from './styledComponents/SuserRepo';

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
      <StyledUserRepo className="UserStarsRepo">
        <h2>List of repositories</h2>
        <div className="cardeList">
          {repolist
            .sort(function compare(a, b) {
              return b.size - a.size;
            })
            .slice(0, 5)
            .map((repo) => {
              return (
                <ul className="carde" key={repo.id}>
                  <div className="repoInfo">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <li className="repoName">{repo.name}</li>
                    </a>
                    <li className="repoDesc">{repo.description}</li>
                  </div>
                  <div className="repoTechno">
                    <li className="languageRepo">{repo.language}</li>
                    <p className={repo.language} />
                  </div>
                </ul>
              );
            })}
        </div>
      </StyledUserRepo>
    </div>
  );
}
export default UserRepo;
