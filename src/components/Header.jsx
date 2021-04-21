import { useState } from 'react';
import './scss/Header.scss';
import { useHistory } from 'react-router-dom';

function Header() {
  const [query, setQuery] = useState('');

  const handleQueryChange = () => {
    const history = useHistory();
    history.push(`/userStats/user`);
  };

  return (
    <div className="loHeader">
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
    </div>
  );
}
export default Header;
