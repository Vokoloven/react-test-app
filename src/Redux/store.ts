import { configureStore } from '@reduxjs/toolkit';
import { setGameSlice } from 'Redux/getGameName/setGameNameSlice';

export const store = configureStore({
  reducer: {
    setGame: setGameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
