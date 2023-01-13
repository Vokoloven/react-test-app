import React from 'react';
import { StyledSearchLikeList } from './StyledSearchLikeList';
import { Box } from 'Theme/Box';

export const SearchLikeButton: React.FC = () => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <StyledSearchLikeList>
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
