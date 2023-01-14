import React from 'react';
import { StyledSearchLikeList } from './StyledSearchLikeList';
import { Box } from 'Theme/Box';
import { setLikeButton } from 'Redux/buttonsStatus/buttonStatusSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Redux/store';

export const SearchLikeButton: React.FC = () => {
  const dispatch = useDispatch();

  const likeButtonStatus = useSelector(
    (state: RootState) => state.setBtnStatus.statusLikeBtn
  );

  const toggleHandler = (e: React.ChangeEvent<any>) => {
    dispatch(setLikeButton(likeButtonStatus));
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <StyledSearchLikeList onClick={toggleHandler}>
        <Box as={'span'} size={12} color={'white'}>
          Search
        </Box>
        <Box as={'span'} size={12} color={'white'} ml={11}>
          Like List
        </Box>
      </StyledSearchLikeList>
    </Box>
  );
};
