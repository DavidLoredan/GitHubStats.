import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import StyledHeader from './styledComponents/Sheader';
import StyledUserInfo from './styledComponents/SuserInfo';
import UserStats from './UserStats';

const MiniUser = styled.div`
  position: relative;
  a {
    text-decoration: none;
    color: black;
  }
`;
function Header() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState([]);
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
          <img className="logo" src="../img/Thak22.png" alt="logoGitStats" />
        </Link>
      </div>
      <section className="blocColor">
        <div className="title">
          <h1>GitHub Stats</h1>
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
          <MiniUser>
            <a href={`/user/${query}`} component={UserStats}>
              <StyledUserInfo className="miniUser">
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
                  <p>Created at: {user.created_at} </p>
                </div>
              </StyledUserInfo>
            </a>
          </MiniUser>
        )}
      </div>
    </StyledHeader>
  );
}
export default Header;
