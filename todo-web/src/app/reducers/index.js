import { combineReducers } from 'redux';
import todos from './todos';
import todosFilter from './todosFilter';

const rootReducer = combineReducers({
  todos,
  todosFilter
});

export default rootReducer;
