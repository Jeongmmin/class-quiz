import { Item, Title, Wrapper } from './BoardDetail.style';

export default function BoardDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Title> {props.data?.fetchProduct.seller}의 게시물 페이지입니다.</Title>
        <Item>
          판매자 : {props.data ? props.data.fetchProduct.seller : 'loading...'}
        </Item>
        <Item>
          상품 이름 : {props.data ? props.data.fetchProduct.name : 'loading...'}
        </Item>
        <Item>
          상품 설명 :{' '}
          {props.data ? props.data.fetchProduct.detail : 'loading...'}
        </Item>
        <Item>
          상품 가격 :{' '}
          {props.data ? props.data.fetchProduct.price : 'loading...'}
        </Item>
      </Wrapper>
    </>
  );
}
