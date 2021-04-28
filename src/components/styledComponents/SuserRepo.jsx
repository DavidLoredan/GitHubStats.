import styled from 'styled-components';

const StyledUserRepo = styled.div`
  border: 2px;
  border-color: black;
  border-style: solid;
  margin-bottom: 20px;
  width: 90vw;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(0, 217, 255, 0.8);
  border-radius: 45px 10px;
  -webkit-box-shadow: 0px 5px 15px 6px #22314a;
  box-shadow: 0px 5px 15px 6px #22314a;
  p {
    text-align: left;
    margin: 30px;
    font-weight: bold;
    font-size: x-large;

    img {
      height: 3vh;
    }
  }

  .cardeList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .carde {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 5px;
    border-radius: 10px;
    border-color: black;
    border-style: solid;
    width: 180px;
    height: auto;
    background-color: rgba(#232529, 0.5);
    margin: 0 3px 0 5px;
    margin-bottom: 10px;

    .repoInfo {
      .repoName {
        font-weight: 800;
        text-align: center;
      }
      .repoDesc {
        margin: 20px 0 5px 2px;
      }
    }

    .repoTechno {
      text-align: right;

      .JavaScript {
        background-color: #f1e05a;
        padding: 5px;
        border-radius: 0 0 10px 10px;
      }
      .Python {
        padding: 5px;
        background-color: #3572a5;
        border-radius: 0 0 10px 10px;
      }
      .HTML {
        padding: 5px;
        background-color: #e34c26;
        border-radius: 0 0 10px 10px;
      }
      .CSS {
        padding: 5px;
        background-color: #563d7c;
        border-radius: 0 0 10px 10px;
      }
      .TypeScript {
        padding: 5px;
        background-color: #2b7489;
        border-radius: 0 0 10px 10px;
      }
      .PHP {
        padding: 5px;
        background-color: #4f5d95;
        border-radius: 0 0 10px 10px;
      }
      .Shell {
        padding: 5px;
        background-color: #89e051;
        border-radius: 0 0 10px 10px;
      }
      .Ruby {
        padding: 5px;
        background-color: #701516;
        border-radius: 0 0 10px 10px;
      }
      .SCSS {
        padding: 5px;
        background-color: #c6538c;
        border-radius: 0 0 10px 10px;
      }
      .Java {
        padding: 5px;
        background-color: #b07219;
        border-radius: 0 0 10px 10px;
      }
      .Vue {
        padding: 5px;
        background-color: #2c3e50;
        border-radius: 0 0 10px 10px;
      }
    }
  }

  @media (max-width: 700px) {
    .UserStarsRepo {
      .carde {
        border: 2px;
        border-radius: 10px;
        border-style: solid;
        width: 100%;
      }
    }
  }
`;

export default StyledUserRepo;
