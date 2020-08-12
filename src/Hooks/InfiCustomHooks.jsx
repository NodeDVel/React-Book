import React from 'react';
import useInputs from './useInputs';

const InfoCustomHooks = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoCustomHooks;