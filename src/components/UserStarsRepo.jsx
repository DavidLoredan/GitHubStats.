import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './UserStarsRepo.scss';

function UserStarsRepo() {
  const [repoList, setrepoList] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/loicbrassart/starred')
      .then(({ data }) => {
        setrepoList(data);
      });
  }, []);

  return (
    <div>
      <p>Stars&apos;s Repo</p>
      <section className="UserStarsRepo">
        <div className="cardeList">
          {repoList.slice(0, 5).map((repo) => {
            return (
              <ul className="carde">
                <li className="repoName">{repo.name}</li>
                <li className="repoDesc">{repo.description}</li>
                <li className="repoLanguage">{repo.language}</li>
              </ul>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default UserStarsRepo;
