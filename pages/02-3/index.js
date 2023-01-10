// export default function MakeAuthenticationNumber() {
//   function onCreateAuthNumber() {
//     let authNumber = document.querySelector('#authNumber');
//     let random = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
//     authNumber.innerText = random;
//     console.log(random);
//   }

//   return (
//     <>
//       <p id='authNumber'>000000</p>
//       <button onClick={onCreateAuthNumber}>인증번호 생성하기</button>
//     </>
//   );
// }

import { useState } from 'react';
export default function MakeAuthenticationNumber() {
  const [authNumber, setAuthNumber] = useState('000000');

  function onCreateAuthNumber() {
    setAuthNumber(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'));
  }

  return (
    <>
      <p>{authNumber}</p>
      <button onClick={onCreateAuthNumber}>인증번호 생성하기</button>
    </>
  );
}
