import { useState } from 'react';
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
  KakaoLoginButton,
  KakaoIcon,
} from '../../styles/02/eatsRoad';

export default function EatsRoadPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function onChangeEmail(e) {
    setEmail(e.target.value);
    !email.includes('@') || email === ''
      ? setEmailError('이메일 주소를 다시 확인해주세요.')
      : setEmailError('');
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
    password.length < 8 || password === ''
      ? setPasswordError('8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.')
      : setPasswordError('');
  }

  function onLogIn() {
    if (emailError === '' && passwordError === '') {
      alert('로그인되었습니다.');
    }
  }

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
            <Input
              placeholder='simplelife@gmail.com'
              type='email'
              onChange={onChangeEmail}
            />
            <DeleteButtonIcon></DeleteButtonIcon>
          </InputWrapper>
          <Line />
          <ErrorMessage>{emailError}</ErrorMessage>
        </InputAndButtonWrapper>
        <InputAndButtonWrapper>
          <InputWrapper>
            <Input
              placeholder='●●●●●●●●'
              type='password'
              onChange={onChangePassword}
            />
            <DeleteButtonIcon></DeleteButtonIcon>
          </InputWrapper>
          <Line />
          <ErrorMessage>{passwordError}</ErrorMessage>
        </InputAndButtonWrapper>
        <LoginButton onClick={onLogIn}>로그인</LoginButton>
        <FooterMenuWrapper>
          <span className='footermenu'>이메일 찾기</span>
          <span>|</span>
          <span className='footermenu'>비밀번호 찾기</span>
          <span>|</span>
          <span className='footermenu'>회원가입</span>
        </FooterMenuWrapper>
        <KakaoLoginButton>
          <KakaoIcon />
          카카오톡으로 로그인
        </KakaoLoginButton>
      </Wrapper>
    </>
  );
}
