import { useRouter } from 'next/router';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import '../../../../styles/05/new';
import {
  InputWrapper,
  SubmitButton,
  Title,
  Wrapper,
} from '../../../../styles/05/new';

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      message
    }
  }
`;

export default function NewPage() {
  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState(0);

  const onClickSubmit = async () => {
    try {
      if (seller && name && detail && price) {
        const result = await createProduct({
          variables: {
            seller,
            createProductInput: {
              name,
              detail,
              price,
            },
          },
        });
        console.log(result);
        alert(result.data.createProduct.message);
        router.push(`/05/boards/detail/number`);
      }else {
        alert('양식을 모두 작성해주세요')
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <Wrapper>
      <Title>상품등록 페이지</Title>
      <InputWrapper>
        <span>판매자</span>
        <input type='text' onChange={onChangeSeller} />
      </InputWrapper>
      <InputWrapper>
        <span>상품명</span>
        <input type='text' onChange={onChangeName} />
      </InputWrapper>
      <InputWrapper>
        <span>상품내용</span>
        <input type='text' onChange={onChangeDetail} />
      </InputWrapper>
      <InputWrapper>
        <span>상품가격</span>
        <input type='number' onChange={onChangePrice} />
      </InputWrapper>

      <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
    </Wrapper>
  );
}
