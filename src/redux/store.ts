import {persistReducer, persistStore,   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, combineReducers, configureStore, createImmutableStateInvariantMiddleware, 
  createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit'
import {api} from './api/api';
import { rootReducer } from './reducers/reducers';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig={
  key: 'persist-store', 
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(api.middleware),

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    // Redux persist
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(api.middleware),
})

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



