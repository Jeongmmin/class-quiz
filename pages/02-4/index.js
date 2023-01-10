import { useState } from 'react';
import {
  Button,
  ErrorMessage,
  Input,
  InputWrapper,
  Label,
  Wrapper,
} from '../../styles/02/signUpForm';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onChangePasswordConfirm(e) {
    setPasswordConfirm(e.target.value);
  }
  function onSubmitSighUpForm(e) {


    if (email.includes('@') === false) {
      setEmailError('이메일은 반드시 @가 들어가야 합니다.');
    } else if (password !== passwordConfirm) {
      setEmailError('');
      setPasswordConfirmError('비밀번호와 비밀번호 확인이 다릅니다.');
    } else {
      setPasswordConfirmError('');
      alert('회원가입이 완료되었습니다!');
    }

  }

  return (
    <>
      <Wrapper>
        <InputWrapper>
          <Label>이메일 :</Label>
          <Input type='text' onChange={onChangeEmail} />
        </InputWrapper>
        <ErrorMessage>{emailError}</ErrorMessage>
        <InputWrapper>
          <Label>비밀번호 :</Label>
          <Input type='password' onChange={onChangePassword} />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호 확인 :</Label>
          <Input type='password' onChange={onChangePasswordConfirm} />
        </InputWrapper>
        <ErrorMessage>{passwordConfirmError}</ErrorMessage>
        <Button onClick={onSubmitSighUpForm}>가입하기</Button>
      </Wrapper>
    </>
  );
}
