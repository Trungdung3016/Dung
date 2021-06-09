import {combineReducers} from 'redux';
import trackReducer from './tracks';
import playerReducer from './player';

const rootReducer = combineReducers({
  tracks : trackReducer,
  player : playerReducer
});

export default rootReducer