import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  background-image: url('https://cdn.hipwallpaper.com/i/56/18/D7hxtw.jpg');
  height: 30vh;

  .title {
    font-size: 3.5em;
    margin-top: 13vh;
    margin-left: 5vw;
    font-weight: 900;
  }

  .sousTitre {
    margin-left: 6vw;
    font-weight: 520;
  }

  .logo {
    margin-top: 8vh;
    margin-left: 15vw;
    width: 140px;
    height: 120px;
    margin-left: 5vw;
  }

  .search {
    display: flex;
    align-items: flex-end;
    margin: 10%;
  }

  .searchBar {
    border-radius: 10px;
    font-size: large;
    padding: 10px;
    width: 20vw;
    margin-left: 15vw;
  }

  @media (max-width: 700px) {
    .title {
      font-size: 2.5em;
      margin-top: 13vh;
    }

    .searchBar {
      font-size: smaller;
    }

    .search {
      display: block;
      width: 50px;
      height: 10px;
      margin: 1%;
      margin-top: 13vh;
    }

    .logo {
      margin-top: 50px;
      width: 100px;
      height: 80px;
    }
  }
`;

export default StyledHeader;
