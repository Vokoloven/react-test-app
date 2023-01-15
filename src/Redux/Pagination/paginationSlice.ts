import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  isResponse: boolean;
  currentPage: number;
  isLoaded: boolean;
}

const initialState: CounterState = {
  isResponse: true,
  currentPage: 1,
  isLoaded: true,
};

export const setPagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    isResponeStatus: (state, action: PayloadAction<boolean>) => {
      state.isResponse = action.payload;
    },
    isCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    isLoadedStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { isResponeStatus, isCurrentPage, isLoadedStatus } =
  setPagination.actions;
