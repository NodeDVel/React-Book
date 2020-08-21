const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 타입은 대문자로 정의 & 문자열 내용은 '모듈이름/액션이름'

export const increase = () => ({ type: 'INCREASE' });
export const decrease = () => ({ type: 'DECREASE' });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE: 
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter;