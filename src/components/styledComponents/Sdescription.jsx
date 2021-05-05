import styled from 'styled-components';

const StyledDesription = styled.div`
  display: flex;
  flex-direction: row-reverse; /*moving the description to the right*/
  color: #f5f7f7;

  .Description {
    background-color: #0e6476;
    width: 60%;
    margin-top: 20vh;
    margin-bottom: 25vh;
    padding: 20px;
    text-align: justify;
    box-shadow: 4px 3px 4px 5px rgba(0, 0, 0, 0.1);
    font-size: 25px;
  }

  p {
    margin-top: 15px;
  }

  .Description h1 {
    text-align: center;
    padding: 20px;
    font-size: 2.6em;
    font-weight: bolder;
    color: #f5f7f7;
  }

  @media (max-width: 700px) {
    .Description {
      font-size: 15px;
      padding-top: 0;
      height: 30%;
    }
  }
`;
export default StyledDesription;
