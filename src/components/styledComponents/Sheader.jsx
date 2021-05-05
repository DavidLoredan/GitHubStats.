import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  background-color: #0e6476;
  height: 30vh;

  .title h1 {
    font-size: 3.5em;
    margin-top: 25%;
    font-weight: 900;
    color: #f5f7f7;
  }

  .sousTitre h2 {
    font-weight: 520;
    color: #f5f7f7;
  }

  .logo {
    margin-top: 8vh;
    margin-left: 15vw;
    width: 140px;
    height: 120px;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  .search {
    margin: 10%;
    display: block;

    .searchBar {
      border-radius: 10px;
      font-size: large;
      padding: 10px;
      width: 20vw;
      margin-left: 10vw;
    }
  }

  .miniUser {
    display: flex;
    width: 21vw;
    background-color: rgb(204, 220, 223);
    border: 1px solid #000;
    margin-top: 10px;
    margin-left: 10vw;

    img {
      width: 45%;
      margin-right: 20px;
      border-radius: 5px 0px 0px 5px;
    }

    h1 {
      font-size: 2em;
      margin: 10px;
    }

    p {
      padding: 2px;
    }
  }

  @media (max-width: 700px) {
    .title h1 {
      font-size: 2.5em;
    }

    .searchBar {
      font-size: smaller;
      margin-right: 15px;
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

    .miniUser {
      width: 30vw;
      margin-left: 7vw;
    }
  }
`;

export default StyledHeader;
