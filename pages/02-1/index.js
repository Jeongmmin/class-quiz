// export default function Changeword() {
//   function onChangeWord() {
//     let button = document.getElementById('changeButton');
//     button.innerText = '반갑습니다';
//   }

//   return (
//     <>
//       <button onClick={onChangeWord} id='changeButton'>
//         안녕하세요
//       </button>
//     </>
//   );
// }

import { useState } from 'react';
export default function Changeword() {
  const [word, setWord] = useState('안녕하세요');

  function onChangeWord() {
    setWord('반갑습니다');
  }

  return (
    <>
      <button onClick={onChangeWord}>{word}</button>
    </>
  );
}
