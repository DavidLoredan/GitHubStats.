import styled from 'styled-components';

const StyledDesription = styled.div`
  display: flex;
  flex-direction: row-reverse; /*moving the description to the right*/
  .Description {
    background-color: rgb(199, 199, 199);
    width: 60vw;
    height: 35vh;
    margin-top: 20vh;
    margin-bottom: 25vh;
    padding: 20px;
    text-align: justify;
    box-shadow: 4px 3px 4px 5px rgba(0, 0, 0, 0.1);
    font-size: x-large;
  }
  p {
    margin-top: 15px;
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
