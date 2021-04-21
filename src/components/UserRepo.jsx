import { useEffect, useState } from 'react';
import axios from 'axios';

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
      <section className='UserRepo'>
        <div className='cardList'>
          {repolist
            .sort(function compare(a, b) {
              return b.size - a.size;
            })
            .slice(0, 5)
            .map((repo) => {
              return (
                <ul>
                  <li>{repo.name}</li>
                  <li>{repo.description}</li>
                  <li>{repo.language}</li>
                </ul>
              );
            })}
        </div>
      </section>
    </div>
  );
}
export default UserRepo;