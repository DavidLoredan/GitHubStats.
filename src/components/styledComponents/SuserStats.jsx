import styled from 'styled-components';

const StyledUserStats = styled.div`
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;

  .user {
    font-size: 1.8em;
    font-weight: 200;
    text-align: center;
  }

  .UserInfo {
    border: 2px;
    border-color: black;
    border-style: solid;
    margin: 20px 0 20px 0;
    padding: 20px;
  }

  .UserLastRepo {
    border: 2px;
    border-color: black;
    border-style: solid;
    margin-bottom: 20px;
    width: 80vw;
    padding: 10px;
    border-radius: 10px;
    background: linear-gradient(90deg, #0af6e5, #1b716e, #080f0f) p {
      text-align: center;
    }

    .repoList .oneLine {
      display: flex;
      justify-content: space-between;
    }
  }
  .UserInfo {
    color: black;
    display: flex;
    justify-content: center;

    img {
      height: 30px;
      margin-right: 20px;
    }
  }
`;
export default StyledUserStats;
