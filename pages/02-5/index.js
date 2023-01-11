import {
  DeleteButtonIcon,
  EmailErrorMessage,
  HeaderWrapper,
  InputAndButtonWrapper,
  InputWrapper,
  Input,
  MapIcon,
  RectangleIcon,
  Wrapper,
  Title,
} from "../../styles/02/eatsRoad";

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
            <Input value={'simplelife@gmail.com'}/>
            <DeleteButtonIcon></DeleteButtonIcon>
          </InputWrapper>
          <EmailErrorMessage>이메일 주소를 다시 확인해주세요.</EmailErrorMessage>
        </InputAndButtonWrapper>
      </Wrapper>
    </>
  );
}
