import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  screenResolution: string;
}

const initialState: CounterState = {
  screenResolution: '',
};

export const setScreen = createSlice({
  name: 'screenStatus',
  initialState,
  reducers: {
    getScreenResolution: (state, action: PayloadAction<string>) => {
      state.screenResolution = action.payload;
    },
  },
});

export const { getScreenResolution } = setScreen.actions;
