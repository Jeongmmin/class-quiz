import {
  InputWrapper,
  SubmitButton,
  Title,
  Wrapper,
} from './BoardWrite.styles';

export default function BoardWriteUI(props) {
  return (
    <>
      <Wrapper>
        <Title>상품등록 페이지</Title>
        <InputWrapper>
          <span>판매자</span>
          <input type='text' onChange={props.onChangeSeller} />
        </InputWrapper>
        <InputWrapper>
          <span>상품명</span>
          <input type='text' onChange={props.onChangeName} />
        </InputWrapper>
        <InputWrapper>
          <span>상품내용</span>
          <input type='text' onChange={props.onChangeDetail} />
        </InputWrapper>
        <InputWrapper>
          <span>상품가격</span>
          <input type='number' onChange={props.onChangePrice} />
        </InputWrapper>

        <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
      </Wrapper>
    </>
  );
}
