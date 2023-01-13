import React, { useState } from 'react';
import { Box } from 'Theme/Box';
import {
  StyledFilterButton,
  StyledFilterSvgIcon,
  OpenedFilterButton,
} from './StyledComponents/StyledFilterButton';

export const FilterButton: React.FC = () => {
  const [filterButtonList, setFilterButtonShown] = useState<boolean>(false);

  const toggleHandlerLikeList = (e: React.ChangeEvent<any>) => {
    setFilterButtonShown(!filterButtonList);
  };

  return (
    <Box>
      <StyledFilterButton onClick={toggleHandlerLikeList}>
        <StyledFilterSvgIcon />
      </StyledFilterButton>
      {filterButtonList && (
        <OpenedFilterButton>
          <Box
            as={'a'}
            color="white"
            href="http://google.com"
            ml={'auto'}
            mr={'auto'}
          >
            Lower to bigger
          </Box>
          <Box
            as={'a'}
            color="white"
            href="http://google.com"
            ml={'auto'}
            mr={'auto'}
          >
            Bigger to lower
          </Box>
        </OpenedFilterButton>
      )}
    </Box>
  );
};
