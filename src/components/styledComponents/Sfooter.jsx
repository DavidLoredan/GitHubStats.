import styled from 'styled-components';

const StyledFooter = styled.div`
  .contact {
    display: flex;
    background-size: cover;
    height: 15vh;
    font-size: 1vw;
  }

  .bloc {
    background-color: rgb(210, 210, 210);
    width: 100vw;
    height: 15vh;
    padding-left: 0.8vw;

    .Link {
      text-decoration: none;
      color: black;
    }
  }

  .bloc h1 {
    text-align: left;
    margin-left: 30px;
    font-weight: bold;
    font-size: 2vw;
    padding-top: 0.4vh;
    margin-bottom: 1vh;
  }

  .bloc p {
    font-weight: bold;
    justify-content: space-around;
    color: black;
    font-size: 1vw;
  }

  .infos {
    text-align: center;
    justify-content: space-around;
    background-color: black;
    color: white;
    font-size: 1vw;
  }

  .link {
    color: white;
    margin-right: 10vw;
  }

  h3 {
    display: inline;
  }

  .logo {
    display: flex;
    margin-top: 1vh;
  }

  .logo p {
    margin-left: 1.5vw;
  }

  .logo img {
    width: 1.5vw;
    height: 1.5vh;
  }
`;

export default StyledFooter;
