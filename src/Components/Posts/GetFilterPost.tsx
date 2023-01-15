import React from 'react';
import { IItem } from 'Types/gameItemsType';
import {
  StyledCard,
  StyledBox,
  StyledImg,
} from './StyledComponents/StyledCard';
import {
  StyledRedHeartButton,
  StyledLikeButton,
} from './StyledComponents/StyledLikeButton';
import { Box } from 'Theme/Box';
import { NavLink } from 'react-router-dom';
import { sortedByPrice, sortedByDate } from 'Helpers/sort';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';

interface ICommon {
  props: IItem[];
  func: (e: React.ChangeEvent<any>) => void;
}

export const GetFilterPost: React.FC<ICommon> = ({ props, func }) => {
  const filterButtonStatus = useSelector(
    (state: RootState) => state.setBtnStatus.statusFilterBtn
  );
  const filterToggleStatus = useSelector(
    (state: RootState) => state.setBtnStatus.eventButton
  );

  const filterToggle = (filterButtonStatus: string, props: IItem[]) => {
    if (filterToggleStatus === 'priceBtn') {
      const sortedPrice = sortedByPrice(filterButtonStatus, props);
      return sortedPrice;
    } else if (filterToggleStatus === 'dateBtn') {
      const sortedDates = sortedByDate(filterButtonStatus, props);
      return sortedDates;
    }
    return [];
  };

  const filterToggleData = filterToggle(filterButtonStatus, props);

  return (
    <StyledBox>
      {filterButtonStatus === ''
        ? props.map(item => {
            return (
              item.appId && (
                <StyledCard key={item.appId} id={item.appId}>
                  <NavLink to={`details/${item.appId}`}>
                    <StyledImg src={item.imgUrl} alt={item.title} />
                    <Box as={'p'} fontSize={'18px'} color={'white'}>
                      {item.title}
                    </Box>
                    <Box as={'p'} fontSize={'18px'} color={'white'}>
                      {item.released}
                    </Box>
                  </NavLink>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Box as={'p'} fontSize={'21px'} color={'white'}>
                      {item.price}
                    </Box>
                    <StyledLikeButton onClick={func}>
                      {<StyledRedHeartButton />}
                    </StyledLikeButton>
                  </Box>
                </StyledCard>
              )
            );
          })
        : filterToggleData.map(item => {
            return (
              item.appId && (
                <StyledCard key={item.appId} id={item.appId}>
                  <NavLink to={`details/${item.appId}`}>
                    <StyledImg src={item.imgUrl} alt={item.title} />
                    <Box as={'p'} fontSize={'18px'} color={'white'}>
                      {item.title}
                    </Box>
                    <Box as={'p'} fontSize={'18px'} color={'white'}>
                      {item.released}
                    </Box>
                  </NavLink>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Box as={'p'} fontSize={'21px'} color={'white'}>
                      {item.price}
                    </Box>
                    <StyledLikeButton onClick={func}>
                      {<StyledRedHeartButton />}
                    </StyledLikeButton>
                  </Box>
                </StyledCard>
              )
            );
          })}
    </StyledBox>
  );
};
