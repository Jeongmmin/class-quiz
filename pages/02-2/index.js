// export default function Counter() {

//   function onClickCountUp() {
//     const count = Number(document.querySelector('#count').innerText) + 1;
//     document.querySelector('#count').innerText = count;
//   }

//   function onClickCountDown() {
//     const count = Number(document.querySelector('#count').innerText) - 1;
//     document.querySelector('#count').innerText = count;
//   }


//   return (
//     <>
//       <p id='count'>0</p>
//       <button onClick={onClickCountUp} >{'➕'}</button>
//       <button onClick={onClickCountDown} >{'➖'}</button>
//     </>
//   );
// }

import React, { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1)
  }

  function onClickCountDown() {
    setCount(count - 1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={onClickCountUp}>{'➕'}</button>
      <button onClick={onClickCountDown}>{'➖'}</button>
    </>
  )
}
