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
      <p>Liste des repos (nom-description-techno)</p>
      <StyledUserRepo className="UserStarsRepo">
        <div className="cardeList">
          {repolist
            .sort(function compare(a, b) {
              return b.size - a.size;
            })
            .slice(0, 5)
            .map((repo) => {
              return (
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <ul className="carde">
                    <div className="repoInfo">
                      <li className="repoName">{repo.name}</li>
                      <li className="repoDesc">{repo.description}</li>
                    </div>
                    <div className="repoTechno">
                      <li className={repo.language}>{repo.language}</li>
                    </div>
                  </ul>
                </a>
              );
            })}
        </div>
      </StyledUserRepo>
    </div>
  );
}
export default UserRepo;
