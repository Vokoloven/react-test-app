import React from 'react';
import { StyledInput } from './StyledInput';
import { useDispatch } from 'react-redux';
import { setGameName } from 'Redux/getGameName/setGameNameSlice';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';

export const Form: React.FC = () => {
  const inputValue = useSelector((state: RootState) => state.setGame.value);
  const dispatch = useDispatch();

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setGameName(e.target.value));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <StyledInput value={inputValue} onChange={eventHandler} />
      </form>
    </div>
  );
};
