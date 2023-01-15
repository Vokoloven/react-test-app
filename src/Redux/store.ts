import { configureStore } from '@reduxjs/toolkit';
import { setGameSlice } from 'Redux/getGameName/setGameNameSlice';
import { setButtonStatusSlice } from 'Redux/buttonsStatus/buttonStatusSlice';
import { setPagination } from './Pagination/paginationSlice';
import { setScreen } from 'Redux/screen/screenSlice';

export const store = configureStore({
  reducer: {
    setGame: setGameSlice.reducer,
    setBtnStatus: setButtonStatusSlice.reducer,
    setPaginationStatus: setPagination.reducer,
    setScreenWidth: setScreen.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
