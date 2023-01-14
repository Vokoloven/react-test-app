import { configureStore } from '@reduxjs/toolkit';
import { setGameSlice } from 'Redux/getGameName/setGameNameSlice';
import { setButtonStatusSlice } from 'Redux/buttonsStatus/buttonStatusSlice';
import { getGameiDSlice } from 'Redux/idGame/getIdGameSlice';

export const store = configureStore({
  reducer: {
    setGame: setGameSlice.reducer,
    setBtnStatus: setButtonStatusSlice.reducer,
    getGameId: getGameiDSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
