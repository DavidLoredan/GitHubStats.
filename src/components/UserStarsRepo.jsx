import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserStarsRepo.scss';

function UserStarsRepo() {
  const [repoList, setrepoList] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/bob/starred').then(({ data }) => {
      setrepoList(data);
    });
  }, []);

  return (
    <div>
      <section className="UserStarsRepo">
        <p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%C3%89toile_d%27or.svg/1200px-%C3%89toile_d%27or.svg.png"
            alt=""
          />
          Stars&apos;s Repo
        </p>
        <div className="cardeList">
          {repoList
            .sort(function (x, y) {
              // Here, we sort the array by size project
              return x.size - y.size;
            })
            .slice(0, 5) // Here, we take the first five elements
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

export default UserStarsRepo;
