import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StyledUserRepo from './styledComponents/SuserRepo';

function UserRepoDate() {
  const [repolist, setRepolist] = useState([]);
  const { login } = useParams();

  function repoCreationDate(data) {
    const saneData = [...data];
    for (let i = 0; i < saneData.length; i += 1) {
      const repo = saneData[i];
      repo.created_at = repo.created_at.substring(0, 10);
      saneData[i] = repo;
    }

    return saneData;
  }

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}/repos`)
      .then(({ data }) => {
        const saneData = repoCreationDate(data);
        setRepolist(saneData);
      });
  }, [login]);

  return (
    <StyledUserRepo>
      <h2>The latest repositories</h2>
      <section className="UserStarsRepo">
        <div className="cardeList">
          {repolist
            .sort(function compare(a, b) {
              return Date.parse(b.created_at) - Date.parse(a.created_at);
            })
            .slice(0, 4)
            .map((repo) => {
              return (
                <ul className="carde" key={repo.id}>
                  <div className="repoInfo">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <li className="repoName">{repo.name}</li>
                    </a>
                    <li className="repoDesc">{repo.created_at}</li>
                  </div>
                  <div className="repoTechno">
                    <li className="languageRepo">{repo.language}</li>
                    <p className={repo.language} />
                  </div>
                </ul>
              );
            })}
        </div>
      </section>
    </StyledUserRepo>
  );
}
export default UserRepoDate;
