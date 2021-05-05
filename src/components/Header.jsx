import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import StyledHeader from './styledComponents/Sheader';
import UserStats from './UserStats';

function Header() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState({});
  const history = useHistory();
  const handleQueryChange = () => {
    history.push(`/user/${query}`);
  };

  useEffect(() => {
    axios.get(`https://api.github.com/users/${query}`).then(({ data }) => {
      setUser(data);
    });
  }, [query]);

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <img
            className="logo"
            src="https://i.ibb.co/rfPqm9t/Logo-Makr-3-Rg99-U.png"
            alt="logoGitStats"
          />
        </Link>
      </div>
      <section className="blocColor">
        <div className="title">
          <Link to="/">
            <h1>GitHub Stats</h1>
          </Link>
        </div>
        <div className="sousTitre">
          <h2>Developper Space</h2>
        </div>
      </section>
      <div className="search">
        <form action="" onSubmit={handleQueryChange}>
          <input
            type="text"
            className="searchBar"
            value={query}
            placeholder="Enter a login Github..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        {user.login && (
          <div className="userSuggested">
            <a href={`/user/${query}`} component={UserStats}>
              <div className="miniUser">
                <img
                  className="userAvatar"
                  srcSet={user.avatar_url}
                  alt="Avatar"
                />
                <div className="userDetail">
                  <h1> {user.login} </h1>
                  <p>{user.company} </p>
                  <p>Followers: {user.followers} </p>
                  <p>Following: {user.following} </p>
                  {user.hireable && <p>Hireable</p>}
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </StyledHeader>
  );
}
export default Header;
