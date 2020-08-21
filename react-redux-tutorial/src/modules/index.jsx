import { combinReducers } from 'react';
import counter from './counter';
import todos from './todos';

const rootReducer = combinReducers({
  counter,
  todos,
});

export default rootReducer;