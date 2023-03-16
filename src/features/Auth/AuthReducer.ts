import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  modalOpen: boolean;
  user: null | string;
  bearToken: null | string;
}

const initialState: InitialState = {
  modalOpen: false,
  user: null,
  bearToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    modalHandle: (state, action) => {
      state.modalOpen = action.payload;
    },
    register: (state, action) => {
      if (action.payload?.name && action.payload?.token) {
        state.user = action.payload.name;
        state.bearToken = action.payload.token;
      }
    },
    logout: (state) => {
      state.user = null;
      state.bearToken = null;
    },
  },
});

export const { modalHandle, register, logout } = authSlice.actions;

export default authSlice.reducer;
