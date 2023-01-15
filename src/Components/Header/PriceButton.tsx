import React, { useState } from 'react';
import {
  StyledButtonPrice,
  OpenedButtonPrice,
  StyledBrowserIcon,
  StyledPriceTags,
  StyledParagraphPrice,
  StyledParagraphDate,
} from './StyledComponents/StyledButtonPrice';
import { Box } from 'Theme/Box';
import { useDispatch } from 'react-redux';
import { setEventButton } from 'Redux/buttonsStatus/buttonStatusSlice';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';

export const ButtonPrice: React.FC = () => {
  const [priceButtonShown, setPriceButtonShown] = useState<boolean>(false);
  const toggleHandlerPrice = (e: React.ChangeEvent<any>) => {
    setPriceButtonShown(!priceButtonShown);
  };
  const dispatch = useDispatch();
  const filterToggleStatus = useSelector(
    (state: RootState) => state.setBtnStatus.eventButton
  );
  const buttonTitle = {
    price: 'Price',
    date: 'Publish Date',
  };

  const changeEventButton = (e: React.ChangeEvent<any>) => {
    const idButton = e.target.id;

    if (!idButton) {
      return;
    }
    dispatch(setEventButton(idButton));
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <StyledButtonPrice onClick={toggleHandlerPrice}>
        <Box as={'p'} ml={18} size={14} color={'white'} width="auto">
          {filterToggleStatus === '' || filterToggleStatus === 'priceBtn'
            ? buttonTitle.price
            : buttonTitle.date}
        </Box>
      </StyledButtonPrice>
      {priceButtonShown && (
        <OpenedButtonPrice onClick={changeEventButton}>
          <StyledParagraphPrice>
            <Box as={'span'} color={'white'} id={'priceBtn'}>
              Price
            </Box>
            <StyledPriceTags />
          </StyledParagraphPrice>
          <StyledParagraphDate>
            <Box as={'span'} color={'white'} id={'dateBtn'}>
              Publish Date
            </Box>
            <StyledBrowserIcon />
          </StyledParagraphDate>
        </OpenedButtonPrice>
      )}
    </Box>
  );
};
