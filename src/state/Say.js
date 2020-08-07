import React, { useState } from 'react'

const Say = () => {
  const [message, setMessage] = useState(''); //첫 번쨰 인자: 초깃값 (숫자, 문자열, 객체, 배열)
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  )
}

export default Say;