import styled from '@emotion/styled';

export const Outer = styled.div`
  box-sizing: border-box;
  width: 642px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  font-family: Noto Sans KR;
  letter-spacing: 0em;
`;

export const Header = styled.div`
  padding: 0 50px;
  border-bottom: 1px #cacaca solid;
`;

export const SearchBar = styled.div`
  height: 101px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Navbar = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 39px;
  font-weight: 700;
  span {
    font-size: 40px;
  }
  div {
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 19px;
    }
    .icon {
      color: #cacaca;
      font-weight: 400;
      margin-left: 5px;
    }
  }
`;

export const Menubar = styled.div`
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-right: 71px;
  span {
    font-size: 30px;
    font-weight: 700;
    color: #cacaca;
  }
  .active {
    color: #ff1b6d;
    padding-bottom: 3px;
    border-bottom: 2px #ff1b6d solid;
  }
`;

export const List = styled.div`
  padding: 25px 50px 10px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 44px;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      font-size: 18px;
      font-weight: 400;
      color: #adadad;
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
      font-weight: 400;
    }
  }
`;

export const Footerbar = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #cacaca;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    justify-content: space-around;
    span {
      font-family: Noto Sans KR;
      font-size: 16px;
      font-weight: 400;
      color: #adadad;
    }
  }
`;
