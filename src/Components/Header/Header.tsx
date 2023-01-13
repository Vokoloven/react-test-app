import React from 'react';
import { ReactComponent as ReactLogo } from 'Image/logo.svg';
import { Form } from './Form';

import { Box } from 'Theme/Box';

import { ButtonPrice } from './PriceButton';
import { FilterButton } from './FilterButton';
import { SearchLikeButton } from './SearchLikeButton';

export const Header: React.FC = () => {
  return (
    <Box display={'flex'} alignItems={'flex-start'}>
      <ReactLogo />
      <Form />
      <FilterButton />
      <ButtonPrice />
      <SearchLikeButton />
    </Box>
  );
};
