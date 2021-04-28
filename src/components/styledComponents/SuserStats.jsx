import styled from 'styled-components';

const StyledUserStats = styled.div`
  background: url('https://cdn.discordapp.com/attachments/828909702665601046/831437536860962867/Sarcelle_Noir_Photo_Reseaux_Publicite_Site_web_Turquoise.png');

  background-position: center center;
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
      height: 70px;
      margin-right: 20px;
    }
  }
`;
export default StyledUserStats;
