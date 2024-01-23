import {combineReducers} from '@reduxjs/toolkit';
import { api } from '../api/api';
import { authReducer } from '../slices/auth-slices/auth-slice';

// add the necessary reducers here //
export const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});
