import React from 'react';
import { StyledSearchLikeList } from './StyledSearchLikeList';
import { Box } from 'Theme/Box';
import { setLikeButton } from 'Redux/buttonsStatus/buttonStatusSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';
import {
  StyledSearchButton,
  StyledLikeButton,
} from './StyledComponents/StyledSearchLikeButton';
import { NavLink } from 'react-router-dom';

export const SearchLikeButton: React.FC = () => {
  const dispatch = useDispatch();

  const { statusLikeBtn } = useSelector(
    (state: RootState) => state.setBtnStatus
  );

  const defaultToggle = (btnName: string) => {
    if (!btnName) {
      return;
    }
    dispatch(setLikeButton(btnName));
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <NavLink to="/">
        <StyledSearchLikeList>
          <StyledSearchButton
            onClick={() => defaultToggle('search')}
            className={statusLikeBtn === 'search' ? 'active' : 'inactive'}
          >
            Search
          </StyledSearchButton>
          <StyledLikeButton
            onClick={() => defaultToggle('likeList')}
            className={statusLikeBtn === 'likeList' ? 'active' : 'inactive'}
          >
            Like List
          </StyledLikeButton>
        </StyledSearchLikeList>
      </NavLink>
    </Box>
  );
};
