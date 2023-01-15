import React from 'react';
import { IItem } from 'Types/gameItemsType';
import {
  StyledCard,
  StyledBox,
  StyledImg,
} from './StyledComponents/StyledCard';
import {
  StyledRedHeartButton,
  StyledTransHeartButton,
  StyledLikeButton,
} from './StyledComponents/StyledLikeButton';
import { Box } from 'Theme/Box';

import { sortedByPrice, sortedByDate } from 'Helpers/sort';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';
import { NavLink } from 'react-router-dom';

interface ICommon {
  props: IItem[];
  favorite: IItem[];
  func: (e: React.ChangeEvent<any>) => void;
}

export const GetPost: React.FC<ICommon> = ({ props, func, favorite }) => {
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
                      {favorite.find(fav => fav.appId === item.appId) ? (
                        <StyledRedHeartButton />
                      ) : (
                        <StyledTransHeartButton />
                      )}
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
                  <Box display={'flex'} justifyContent={'spsace-between'}>
                    <Box as={'p'} fontSize={'21px'} color={'white'}>
                      {item.price}
                    </Box>
                    <StyledLikeButton onClick={func}>
                      {favorite.find(fav => fav.appId === item.appId) ? (
                        <StyledRedHeartButton />
                      ) : (
                        <StyledTransHeartButton />
                      )}
                    </StyledLikeButton>
                  </Box>
                </StyledCard>
              )
            );
          })}
    </StyledBox>
  );
};
