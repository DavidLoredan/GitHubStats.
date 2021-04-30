import styled from 'styled-components';

const StyledEvent = styled.div`
  .Infos {
    display: flex;

    a {
      text-decoration: none;
      color: black;
    }
  }

  img {
    margin: 10px;
    height: 50%;
  }

  .InfoTitle {
    padding: 30px;
    text-align: center;
    font-size: 2.6em;
    font-weight: bolder;
    height: 12vh;
    background-color: rgb(199, 199, 199);
  }
  @media (max-width: 700px) {
    .eventsTitle {
      font-size: small;
    }
  }

  .SubjectInfo {
    position: relative;
    bottom: 40px;
    height: 43vh;
    width: 35vw;
    margin-left: 9vw;
    border: 1px solid black;
    background-color: rgb(199, 199, 199);
    text-align: center;
  }

  .SubjectTitle {
    font-size: 3vh;
    font-weight: bold;
    margin: 5px;
  }
  p {
    margin: 10px;
  }
  .SubjectDate {
    margin: 10px;
  }
`;
export default StyledEvent;
