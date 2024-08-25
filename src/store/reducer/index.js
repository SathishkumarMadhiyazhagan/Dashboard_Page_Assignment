import { combineReducers } from 'redux';
import { DashboardReducer } from './DashboardReducer.js';

const rootReducer = combineReducers({
  data: DashboardReducer,
});

export default rootReducer;
