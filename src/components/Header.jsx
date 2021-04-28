import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import StyledHeader from './styledComponents/Sheader';

function Header() {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const handleQueryChange = () => {
    history.push(`/user/${query}`);
  };

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
      </div>
    </StyledHeader>
  );
}
export default Header;
