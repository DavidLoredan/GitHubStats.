import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './scss/Header.scss';

function Header() {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const handleQueryChange = () => {
    history.push(`/user/${query}`);
  };

  return (
    <div className="Header">
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
        <input
          type="text"
          className="searchBar"
          value={query}
          placeholder="Enter a login Github..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="button" onClick={handleQueryChange}>
          search
        </button>
      </div>
    </div>
  );
}
export default Header;
