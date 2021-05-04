import styled from 'styled-components';

const StyledFooter = styled.div`
  .contact {
    display: flex;
    background-size: cover;
    height: 15vh;
    font-size: 1vw;
  }

  .bloc {
    background-color: #0e6476;
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
    font-size: 35px;
    padding-top: 0.4vh;
    margin-bottom: 1vh;
  }

  .bloc p {
    font-weight: bold;
    justify-content: space-around;
    color: white;
    font-size: 20px;
  }

  .infos {
    text-align: center;
    justify-content: space-around;
    background-color: #0e6476;
    color: white;
    font-size: 1.4vh;
  }

  .link {
    color: #f5f7f7;
    margin-right: 7%;
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
    width: 20px;
    height: 20px;
  }

  @media (max-width: 700px) {
    .bloc h1 {
      font-size: x-small;
    }
    .bloc p {
      font-size: x-small;
    }
    .infos {
      font-size: 1.1vh;
    }
    .link {
      margin-right: 10%;
    }
    .logo img {
      font-size: x-small;
      font-size: y-small;
    }
    .bloc {
      font-size: y-small;
    }
    .contact {
      font-size: y-small;
    }
  }
`;

export default StyledFooter;
