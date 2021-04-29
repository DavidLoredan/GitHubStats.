import styled from 'styled-components';

const StyledScreenShot = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  background-size: cover;
  height: 100%;
  img {
    position: relative;
    bottom: 40px;
    margin-left: 8%;
    width: 35vw;
    border: solid 1px #000;
  }
  .event2 {
    height: 36vh;
  }
  .API {
    margin: 0 40px;
  }
  .titleAPI {
    padding: 30px;
    text-align: center;
    font-size: 2.6em;
    font-weight: bolder;
    height: 12vh;
    background-color: rgb(199, 199, 199);
  }
  @media (max-width: 700px) {
    .titleAPI {
      font-size: small;
    }
  }
`;

export default StyledScreenShot;
