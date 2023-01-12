import React, { useState } from 'react';
import { ReactComponent as ReactLogo } from 'Image/logo.svg';
import { Form } from './Form';
import { StyledFilterButton, StyledFilterSvgIcon } from './StyledFilterButton';
import { StyledButtonPrice, OpenedButtonPrice } from './StyledButtonPrice';
import { StyledSearchLikeList } from './StyledSearchLikeList';
import { Box } from 'Theme/Box';

export const Header: React.FC = () => {
  const [priceButton, setPriceButton] = useState<boolean>(false);

  const toggleHandler = (e: React.ChangeEvent<any>) => {
    setPriceButton(!priceButton);
  };

  return (
    <Box display={'flex'} alignItems={'flex-start'}>
      <ReactLogo />
      <Form />
      <StyledFilterButton>
        <StyledFilterSvgIcon />
      </StyledFilterButton>
      <Box display={'flex'} flexDirection={'column'}>
        <StyledButtonPrice onClick={toggleHandler}>
          <Box as={'span'} ml={18} size={14} color={'white'}>
            Price
          </Box>
        </StyledButtonPrice>
        <OpenedButtonPrice />
      </Box>
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
