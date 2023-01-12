import {
  DeleteButtonIcon,
  ErrorMessage,
  HeaderWrapper,
  InputAndButtonWrapper,
  InputWrapper,
  Input,
  MapIcon,
  RectangleIcon,
  Wrapper,
  Title,
  Line,
  LoginButton,
  FooterMenuWrapper,
} from '../../styles/02/eatsRoad';

export default function EatsRoadPage() {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <MapIcon />
          <RectangleIcon />
          <Title>잇츠로드</Title>
        </HeaderWrapper>
        <InputAndButtonWrapper>
          <InputWrapper>
            <Input value={'simplelife@gmail.com'} type='email' />
            <DeleteButtonIcon></DeleteButtonIcon>
          </InputWrapper>
          <Line />
          <ErrorMessage>이메일 주소를 다시 확인해주세요.</ErrorMessage>
        </InputAndButtonWrapper>
        <InputAndButtonWrapper>
          <InputWrapper>
            <Input value={'●●●●●●●●'} type='password' />
            <DeleteButtonIcon></DeleteButtonIcon>
          </InputWrapper>
          <Line />
          <ErrorMessage>
            8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.
          </ErrorMessage>
        </InputAndButtonWrapper>
        <LoginButton>로그인</LoginButton>
        <FooterMenuWrapper>
          <span className='footermenu'>이메일 찾기</span>
          <span>|</span>
          <span className='footermenu'>비밀번호 찾기</span>
          <span>|</span>
          <span className='footermenu'>회원가입</span>
        </FooterMenuWrapper>
      </Wrapper>
    </>
  );
}
