import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  gameId: string;
}

const initialState: CounterState = {
  gameId: '',
};

export const getGameiDSlice = createSlice({
  name: 'gameId',
  initialState,
  reducers: {
    setGameId: (state, action: PayloadAction<string>) => {
      state.gameId = action.payload;
    },
  },
});

export const { setGameId } = getGameiDSlice.actions;
