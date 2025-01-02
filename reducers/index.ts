import { combineReducers } from '@reduxjs/toolkit';

import loadingReducer from './loading';
import sessionReducer from './session';

export default combineReducers({
  loading: loadingReducer,
  session: sessionReducer,
});
