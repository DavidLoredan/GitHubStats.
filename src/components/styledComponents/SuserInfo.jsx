import styled from 'styled-components';

const StyledUserInfo = styled.div`
  background-color: rgb(199, 199, 199);
  border-radius: 5px;
  display: flex;
  margin-top: 20px;
  height: 22vh;
  img {
    height: 22vh;
    margin-right: 20px;
    border-radius: 5px 0px 0px 5px;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  p {
    padding: 2px;
  }
  .userDetail {
    font-size: x-large;
    margin-top: 10px;
  }
  .userName {
    font-size: xxx-large;
  }
`;
export default StyledUserInfo;
