import axios from 'axios';

export default function RestApiPage() {

  const onClickSubmit = async() => {
    const result = await axios.get(`https://koreanjson.com/users`);
    console.log(result.data);
  }

  return (
    <>
      <button onClick={onClickSubmit}>REST-API 요청하기</button>
    </>
  );
}
