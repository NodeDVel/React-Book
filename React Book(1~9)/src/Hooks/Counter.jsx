import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </p>
    </div>
  )
}

export default Counter;

// const [visible, setVisible] = useState(false); //App.jsx에서 사용하는 코드

// return (
//   <div>
//     <button onClick={() => setVisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>
//     <hr/>
//     {visible && <Info/>}
//   </div>
// )