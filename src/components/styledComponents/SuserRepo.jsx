import styled from 'styled-components';

const StyledUserRepo = styled.div`
  border: 1px;
  border-color: black;
  border-style: solid;
  margin-bottom: 20px;
  width: 90vw;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(199, 199, 199);

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
    background-color: rgb(230, 230, 230);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px;
    border-radius: 5px;
    border-color: black;
    border-style: solid;
    width: 280px;
    height: 200px;
    margin: 0 3px 10px 5px;

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

      li {
        padding: 5px;
        border-radius: 0 0 5px 5px;
        background-color: #b8b8b8;
        font-weight: 600;
      }

      .JavaScript {
        background-color: #f1e05a;
      }
      .Python {
        background-color: #3572a5;
      }
      .HTML {
        background-color: #e34c26;
      }
      .CSS {
        background-color: #563d7c;
      }
      .TypeScript {
        background-color: #2b7489;
      }
      .PHP {
        background-color: #4f5d95;
      }
      .Shell {
        background-color: #89e051;
      }
      .Ruby {
        background-color: #701516;
      }
      .SCSS {
        padding: 5px;
        background-color: #c6538c;
      }
      .Java {
        padding: 5px;
        background-color: #b07219;
      }
      .Vue {
        background-color: #2c3e50;
      }
      .Clojure {
        background-color: #db5855;
      }
      .ASP {
        background-color: #178600;
      }
      .C {
        background-color: #555555;
      }
      .Go {
        background-color: #00add8;
      }
    }
  }
  .carde:hover {
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 700px) {
    .UserStarsRepo {
      .carde {
        border: 2px;
        border-radius: 10px;
        border-style: solid;
        width: 90vw;
        height: auto;
      }
    }
  }
`;

export default StyledUserRepo;
