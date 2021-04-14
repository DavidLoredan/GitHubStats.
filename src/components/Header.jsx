import './scss/Header.scss';

function Header() {
  return (
    <div className="loHeader">
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
