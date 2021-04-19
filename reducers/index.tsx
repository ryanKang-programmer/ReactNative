import { combineReducers } from 'redux'; // 흩어진 reducer 들을 하나로 모아준다.

import user from './user';
import post from './post';

const rootReducer = combineReducers({
   user,
   post,
});

export default rootReducer;