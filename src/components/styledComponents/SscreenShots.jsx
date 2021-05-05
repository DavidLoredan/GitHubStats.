import styled from 'styled-components';

const StyledScreenShot = styled.div`
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
    color: #f5f7f7;
    height: 12vh;
    background-color: #0e6476;
  }
  @media (max-width: 700px) {
    .titleAPI {
      font-size: 1.9em;
    }
  }
`;

export default StyledScreenShot;
