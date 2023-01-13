import React, { useState } from 'react';
import {
  StyledButtonPrice,
  OpenedButtonPrice,
  StyledBrowserIcon,
  StyledPriceTags,
} from './StyledComponents/StyledButtonPrice';
import { Box } from 'Theme/Box';

export const ButtonPrice: React.FC = () => {
  const [priceButtonShown, setPriceButtonShown] = useState<boolean>(false);
  const toggleHandlerPrice = (e: React.ChangeEvent<any>) => {
    setPriceButtonShown(!priceButtonShown);
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <StyledButtonPrice onClick={toggleHandlerPrice}>
        <Box as={'span'} ml={18} size={14} color={'white'}>
          Price
        </Box>
      </StyledButtonPrice>
      {priceButtonShown && (
        <OpenedButtonPrice>
          <Box
            as={'a'}
            href={'http://google.com'}
            display={'flex'}
            justifyContent={'space-between'}
            mr={18}
            ml={18}
            pt={10}
          >
            <Box as={'span'} color={'white'}>
              Price
            </Box>
            <StyledPriceTags />
          </Box>
          <Box
            as={'a'}
            href={'http://google.com'}
            display={'flex'}
            justifyContent={'space-between'}
            mr={18}
            ml={18}
            mb={'4px'}
          >
            <Box as={'span'} color={'white'}>
              Publish Date
            </Box>
            <StyledBrowserIcon />
          </Box>
        </OpenedButtonPrice>
      )}
    </Box>
  );
};
