import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { categoryReducer } from './category/categoryReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
});
