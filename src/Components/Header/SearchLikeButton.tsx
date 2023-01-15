import React from 'react';
import { StyledSearchLikeList } from './StyledSearchLikeList';
import { Box } from 'Theme/Box';
import { setLikeButton } from 'Redux/buttonsStatus/buttonStatusSlice';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

export const SearchLikeButton: React.FC = () => {
  const dispatch = useDispatch();

  const toggleSearchLikeBtn = (e: React.ChangeEvent<any>) => {
    const idSearchLikeBtn = e.target.id;

    if (!idSearchLikeBtn) {
      return;
    }
    dispatch(setLikeButton(idSearchLikeBtn));
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <NavLink to="/">
        <StyledSearchLikeList onClick={toggleSearchLikeBtn}>
          <Box
            as={'span'}
            size={12}
            color={'white'}
            id={'search'}
            pt={'9px'}
            pb={'9px'}
            pl={'5px'}
          >
            Search
          </Box>
          <Box
            as={'span'}
            size={12}
            color={'white'}
            ml={11}
            id={'like'}
            pt={'9px'}
            pb={'9px'}
            pr={'5px'}
          >
            Like List
          </Box>
        </StyledSearchLikeList>
      </NavLink>
    </Box>
  );
};
