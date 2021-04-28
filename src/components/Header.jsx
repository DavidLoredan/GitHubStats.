import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import StyledHeader from './styledComponents/HeaderStyled';

function Header() {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const handleQueryChange = () => {
    history.push(`/user/${query}`);
  };

  return (
    <StyledHeader>
      <div>
        <img
          className="loLogo"
          src="https://i.ibb.co/rfPqm9t/Logo-Makr-3-Rg99-U.png"
          alt="logoGitStats"
        />
      </div>
      <section className="loBlocColor">
        <div className="loTitle">
          <h1>GitHub Stats</h1>
        </div>
        <div className="loSousTitre">
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
          <input className="button" type="submit" value="search" />
        </form>
      </div>
    </StyledHeader>
  );
}
export default Header;
