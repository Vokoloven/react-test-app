import React, { useState } from 'react';
import { Box } from 'Theme/Box';
import {
  StyledFilterButton,
  StyledFilterSvgIcon,
  OpenedFilterButton,
  StyledParagraph,
} from './StyledComponents/StyledFilterButton';

import { setFilterButton } from 'Redux/buttonsStatus/buttonStatusSlice';
import { useDispatch } from 'react-redux';

export const FilterButton: React.FC = () => {
  const dispatch = useDispatch();
  const [filterButtonList, setFilterButtonShown] = useState<boolean>(false);

  const toggleHandlerLikeList = (e: React.ChangeEvent<any>) => {
    setFilterButtonShown(!filterButtonList);
  };

  const changeFilterPrice = (e: React.ChangeEvent<any>) => {
    const idFilter = e.target.id;

    if (!idFilter) {
      return;
    }
    dispatch(setFilterButton(idFilter));
  };

  return (
    <Box>
      <StyledFilterButton onClick={toggleHandlerLikeList}>
        <StyledFilterSvgIcon />
      </StyledFilterButton>
      {filterButtonList && (
        <OpenedFilterButton onClick={changeFilterPrice}>
          <StyledParagraph id={'lower'}>Lower to bigger</StyledParagraph>
          <StyledParagraph id={'bigger'}>Bigger to lower</StyledParagraph>
        </OpenedFilterButton>
      )}
    </Box>
  );
};
