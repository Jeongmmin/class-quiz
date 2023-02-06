import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { useState } from 'react';
import { CREATE_PRODUCT } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';

export default function BoardWrite() {
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
        router.push(`/06/boards/detail/${result.data.createProduct._id}`);
      } else {
        alert('양식을 모두 작성해주세요');
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
    <>
      <BoardWriteUI
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickSubmit={onClickSubmit}
      />
    </>
  );
}
