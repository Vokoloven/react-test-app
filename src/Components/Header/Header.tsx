import React from 'react';
import { ReactComponent as Logo } from 'Image/logo.svg';
import { Form } from './Form';
import { Box } from 'Theme/Box';
import { NavLink } from 'react-router-dom';

import { ButtonPrice } from './PriceButton';
import { FilterButton } from './FilterButton';
import { SearchLikeButton } from './SearchLikeButton';
import { StyledHeaderBox } from './StyledComponents/StyledHeaderBox';
import { useScreenChecker } from 'Helpers/screenChecker';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';
export const Header: React.FC = () => {
  useScreenChecker();
  const { screenResolution } = useSelector(
    (state: RootState) => state.setScreenWidth
  );

  return (
    <>
      {screenResolution === 'desktop' && (
        <StyledHeaderBox>
          <Box minWidth={'150px'}>
            <NavLink to={'/'}>
              <Logo />
            </NavLink>
          </Box>
          <Form />
          <FilterButton />
          <ButtonPrice />
          <SearchLikeButton />
        </StyledHeaderBox>
      )}
      {screenResolution === 'tablet' && (
        <StyledHeaderBox>
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
          <Form />
          <FilterButton />
          <ButtonPrice />
          <SearchLikeButton />
        </StyledHeaderBox>
      )}
      {screenResolution === 'mobile' && (
        <StyledHeaderBox>
          <Box display={'flex'} mb={'7px'}>
            <Box minWidth={'144px'}>
              <NavLink to={'/'}>
                <Logo />
              </NavLink>
            </Box>
            <SearchLikeButton />
          </Box>
          <Box mb={'8px'}>
            <Form />
          </Box>
          <Box display={'flex'}>
            <ButtonPrice />
            <FilterButton />
          </Box>
        </StyledHeaderBox>
      )}
    </>
  );
};
