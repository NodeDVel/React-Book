import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균 값 계산 중..');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  }

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    console.log(nextList);
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo()는 2개의 인자를 받는데, 첫번째는 결과 값을 생성해주는 팩토리 함수이고, 두번째는 결과값을 재활용할 때 기준이 되는 입력값 배열이다.

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b> {avg}
      </div>
    </div>
  );
}

export default Average;