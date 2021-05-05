import styled from 'styled-components';

const StyledUserRepo = styled.div`
  margin-bottom: 20px;
  width: 90vw;
  padding: 10px;

  h2 {
    text-align: left;
    margin: 30px;
    font-weight: bold;
    font-size: xx-large;

    img {
      height: 3vh;
    }
  }

  .cardeList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .carde {
    background-color: rgb(204, 220, 223);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    border-color: #0e6476;
    border: solid transparent;
    width: 280px;
    height: 300px;

      .repoName {
        font-weight: 800;
        text-align: center;
        font-size: 1.6em;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .repoDesc {
        margin: 20px 0 5px 2px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .repoInfo{
        padding: 0 10px 0 10px;
      }
    }

    .repoTechno {
      text-align: right;
      display: flex;
      align-items: center;
      background-color: #f5f7f7;
      .languageRepo {
        padding: 5px;
        border-radius: 0 0 4px 4px;

        font-weight: 600;
        width: 100%;
      }
      p {
        width: 15px;
        height: 15px;
        border-radius: 20px;
      }
      .JavaScript {
        background: #f1e05a;
      }

      .Python {
        background: #3572a5;
      }
      .HTML {
        background: #e34c26;
      }
      .CSS {
        background: #563d7c;
      }
      .TypeScript {
        background: #2b7489;
      }
      .PHP {
        background: #4f5d95;
      }
      .Shell {
        background: #89e051;
      }
      .Ruby {
        background: #701516;
      }
      .SCSS {
        background: #c6538c;
      }
      .Java {
        background: #b07219;
      }
      .Vue {
        background: #2c3e50;
      }
      .Clojure {
        background: #db5855;
      }
      .ASP {
        background: #178600;
      }
      .C {
        background: #555555;
      }
      .Go {
        background: #00add8;
      }
    }
  }
  .carde:hover {
    border: 2px;
    border-radius: 5px;
    border-color: #0e6476;
    border: solid;
  }

  @media (max-width: 700px) {
    .UserStarsRepo {
      .carde {
        border: 2px;
        border-radius: 10px;
        border: solid;
        width: 90vw;
        height: auto;
      }
    }
  }
`;

export default StyledUserRepo;
