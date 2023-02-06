import { Item, Title, Wrapper } from '../../../../../styles/05/detail';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.id },
  });

  return (
    <Wrapper>
      <Title> {data?.fetchProduct.seller}의 게시물 페이지입니다.</Title>
      <Item>판매자 : {data ? data.fetchProduct.seller : 'loading...'}</Item>
      <Item>상품 이름 : {data ? data.fetchProduct.name : 'loading...'}</Item>
      <Item>상품 설명 : {data ? data.fetchProduct.detail : 'loading...'}</Item>
      <Item>상품 가격 : {data ? data.fetchProduct.price : 'loading...'}</Item>
    </Wrapper>
  );
}
