import styled from 'styled-components';

const StyledEvent = styled.div`
  .Infos {
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .InfoTitle {
    padding: 30px;
    text-align: center;
    font-size: 2.6em;
    font-weight: bolder;
    color: #f5f7f7;
    height: 12vh;
    background-color: #0e6476;
  }

  .SubjectInfo {
    position: relative;
    bottom: 40px;
    width: 35vw;
    height: 100%;
    margin-top: 5px;
    border: 1px solid black;
    background-color: rgb(204, 220, 223);
    text-align: center;
  }

  img {
    margin: 8px;
    width: 95%;
    border-radius: 3px;
  }

  .SubjectTitle {
    font-size: 1.4em;
    font-weight: bold;
    margin: 5px;
  }

  p {
    margin: 10px;
  }

  .SubjectDate {
    margin: 10px;
  }

  @media (max-width: 700px) {
    .eventsTitle {
      font-size: small;
    }

    .SubjectTitle {
      font-size: 1em;
    }

    p {
      font-size: 15px;
    }
  }
`;

export default StyledEvent;
