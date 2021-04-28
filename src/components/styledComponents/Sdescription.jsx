import styled from 'styled-components';

const StyledDesription = styled.div`
  display: flex;
  flex-direction: row-reverse; /*moving the description to the right*/
  .Description {
    background-color: rgba(0, 217, 255, 0.9);
    color: #fff;
    width: 60vw;
    height: 35vh;
    margin-top: 25vh;
    margin-bottom: 25vh;
    padding: 20px;
    text-align: justify;
    box-shadow: 10px 10px 5px rgb(95, 92, 92);
  }
  @media (max-width: 700px) {
    .Description {
      font-size: x-small;
      padding-top: 0;
    }
  }
  h1 {
    text-align: center;
    color: #000;
    padding: 20px;
    font-size: 2.6em;
    font-weight: bolder;
  }
`;
export default StyledDesription;
