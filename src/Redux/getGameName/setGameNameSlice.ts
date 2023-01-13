import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: '',
};

export const setGameSlice = createSlice({
  name: 'gameRequest',
  initialState,
  reducers: {
    setGameName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setGameName } = setGameSlice.actions;
