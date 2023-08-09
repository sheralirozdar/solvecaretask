import { combineReducers } from 'redux';
import tasksReducer from './task'

const rootReducer = combineReducers({
  tasks: tasksReducer,

});

export default rootReducer;