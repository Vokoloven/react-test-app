import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  statusLikeBtn: boolean;
}

const initialState: CounterState = {
  statusLikeBtn: false,
};

export const setButtonStatusSlice = createSlice({
  name: 'buttonStatusChanger',
  initialState,
  reducers: {
    setLikeButton: (state, action: PayloadAction<boolean>) => {
      state.statusLikeBtn = !action.payload;
    },
  },
});

export const { setLikeButton } = setButtonStatusSlice.actions;
