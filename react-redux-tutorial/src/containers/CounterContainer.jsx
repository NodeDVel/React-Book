import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number); //useSelector를 사용하면 connet 함수 대신 사용
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  )

};

export default CounterContainer;

// const mapStateToProps = state => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer);

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease
//   }
// )(CounterContainer); 