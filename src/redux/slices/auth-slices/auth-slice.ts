import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setIslogin: (state, action) => {
      state.isLogin = action.payload;
    },

  },
});

export const {setIslogin} =
  authSlice.actions;

export const authReducer = authSlice.reducer;
