import styled from 'styled-components';

const StyledEvent = styled.div`
  .InfoContainer {
    .Infos {
      justify-content: space-around;
      display: flex;

      a {
        text-decoration: none;
        color: black;
      }
    }

    img {
      position: relative;
      width: 40%;
      box-shadow: 5px 5px 5px rgb(95, 92, 92);
      margin: 15px;
      border-radius: 45px 10px;
    }

    .InfoTitle {
      padding: 30px;
      text-align: center;
      font-size: 2.6em;
      font-weight: bolder;
      height: 10vh;
      background-color: rgb(199, 199, 199);
      color: grey;
    }
    @media (max-width: 700px) {
      .eventsTitle {
        font-size: small;
        .Infos {
          flex-wrap: nowrap;
        }
      }
    }
  }

  .SubjectInfo {
    position: relative;
    bottom: 40px;
    width: 40%;
    box-shadow: 5px 5px 5px rgb(95, 92, 92);
    margin: 15px;
    border-radius: 45px 10px;
    border: 2px solid black;
    background-color: rgba(35, 37, 41, 0.5);
    text-align: center;
  }

  .SubjectTitle {
    font-size: 3vh;
    font-weight: bold;
  }
`;
export default StyledEvent;
