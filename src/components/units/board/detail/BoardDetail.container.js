import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_PRODUCT } from './../../../../../src/components/units/board/detail/BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.id },
  });

  return (
    <>
      <BoardDetailUI data={data} />
    </>
  );
}
