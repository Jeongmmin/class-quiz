import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 640px;
  background-image: url('./assets/day02/img-bg@3x 1.png');
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 544px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MapIcon = styled.div`
  // position: absolute;
  background-image: url('./assets/day02/map_icon.png');
  background-size: contain;
  height: 82px;
  width: 66px;
`;

export const RectangleIcon = styled.div`
  width: 72px;
  height: 24px;
  background: #d9d9d9;
  opacity: 0.6;
  border-radius: 50px;
  // transform: translateY(40px);
`;

export const Title = styled.p`
  font-family: Noto Sans KR;
  font-size: 60px;
  font-weight: 700;
  color: #ffffff;
`;

export const InputAndButtonWrapper = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 38px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

export const DeleteButtonIcon = styled.div`
  background-image: url('./assets/day02/delete_icon.png');
  background-size: contain;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #7d7d7d;
  margin-top: 7px;
`;

export const ErrorMessage = styled.div`
  color: #ff1b6d;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  margin-top: 12px;
`;

export const LoginButton = styled.button`
  width: 540px;
  padding: 19px 0;
  background: rgba(255, 27, 109, 0.6);
  border-radius: 38px;
  color: #ffffff;
  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 26px;
  margin-top: 20px;
  cursor: pointer;
`;

export const FooterMenuWrapper = styled.div`
  width: 424px;
  height: 29px;
  margin: 38px 0 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }
  .footermenu {
    cursor: pointer;
  }
`;
