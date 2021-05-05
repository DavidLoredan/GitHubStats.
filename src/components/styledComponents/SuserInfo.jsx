import styled from 'styled-components';

const StyledUserInfo = styled.div`
  background-color: rgb(204, 220, 223);
  border-radius: 5px;
  display: flex;
  margin-top: 20px;
  height: 40%;
  width: 50%;

  @media (max-width: 700px) {
    width: 90%;
    h1 {
      font-size: 1.2em;
    }
    p {
      font-size: small;
    }
    a {
      font-size: small;
    }
  }
  img {
    margin-right: 20px;
    border-radius: 5px 0px 0px 5px;
    @media (max-width: 700px) {
      display: none;
    }
  }
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }

  h2 {
    padding: 2px;
  }
  p {
    padding: 5px;
  }
  .userDetail {
    width: 100%;

    font-size: x-large;
    margin-top: 10px;
    .nameAndActivity {
      display: flex;
      justify-content: space-between;
      .imgActivity {
        height: 40px;
        width: 40px;
      }
    }
  }
`;
export default StyledUserInfo;
