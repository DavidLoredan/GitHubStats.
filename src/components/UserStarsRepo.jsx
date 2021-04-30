import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StyledUserRepo from './styledComponents/SuserRepo';

function UserStarsRepo() {
  const [repoList, setrepoList] = useState([]);
  const { login } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}/starred`)
      .then(({ data }) => {
        setrepoList(data);
      });
  }, [login]);

  return (
    <StyledUserRepo>
      <section className="UserStarsRepo">
        <p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%C3%89toile_d%27or.svg/1200px-%C3%89toile_d%27or.svg.png"
            alt=""
          />
          Starred repos
        </p>
        <div className="cardeList">
          {repoList
            .sort(function compare(x, y) {
              // Here, we sort the array by size project
              return y.size - x.size;
            })
            .slice(0, 5) // Here, we take the first five elements
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
      </section>
    </StyledUserRepo>
  );
}

export default UserStarsRepo;
