import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  background-image: url('https://cdn.hipwallpaper.com/i/56/18/D7hxtw.jpg');
  height: 30vh;

  .loBlocColor {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vw;
    height: 90%;
    margin-left: 7vw;
    width: 30vw;
    border-radius: 45px 10px;
  }

  .loTitle {
    font-size: 3.5em;
    margin-top: 13vh;
    font-weight: 900;
  }

  .loLogo {
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
  }

  .button {
    border-radius: 8px;
    height: 35px;
    margin: 5px;
  }
  @media (max-width: 700px) {
    .Header {
      height: 20vh;
    }

    .loTitle {
      font-size: 2.5em;
      margin-top: 20%;
    }

    .searchBar {
      font-size: smaller;
    }

    .search {
      display: block;
      width: 50px;
      height: 10px;
      margin: 3%;
      margin-top: 13%;
    }

    .loLogo {
      margin-top: 50px;
      width: 100px;
      height: 80px;
    }
  }
`;

export default StyledHeader;
