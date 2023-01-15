import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  statusLikeBtn: string;
  statusFilterBtn: string;
  eventButton: string;
}

const initialState: CounterState = {
  statusLikeBtn: 'search',
  statusFilterBtn: '',
  eventButton: '',
};

export const setButtonStatusSlice = createSlice({
  name: 'buttonStatusChanger',
  initialState,
  reducers: {
    setLikeButton: (state, action: PayloadAction<string>) => {
      state.statusLikeBtn = action.payload;
    },
    setFilterButton: (state, action: PayloadAction<string>) => {
      state.statusFilterBtn = action.payload;
    },
    setEventButton: (state, action: PayloadAction<string>) => {
      state.eventButton = action.payload;
    },
  },
});

export const { setLikeButton, setFilterButton, setEventButton } =
  setButtonStatusSlice.actions;
