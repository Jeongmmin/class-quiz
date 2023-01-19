import { Title, Wrapper } from '../../../../../styles/05/detail';
import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
    }
  }
`;



export default function DetailPage() {


  const router = useRouter();
  console.log(router);
  console.log(router.query.number);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return (
    <Wrapper>
      <Title>1번 게시물 페이지입니다.</Title>
    </Wrapper>
  );
}
