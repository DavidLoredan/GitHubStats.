import styled from 'styled-components';

const StyledUserInfo = styled.div`
  background-color: rgba(0, 217, 255, 0.9);
  border-radius: 25px 10px;
  .userAvatar {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
  }
  .userDetail {
    display: flex;
    flex-direction: column;
  }
  .userName {
    font-size: xx-large;
  }
`;
export default StyledUserInfo;
