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

interface ICommon {
  props: IItem[];
  favorite: IItem[];
  func: (e: React.ChangeEvent<any>) => void;
}

export const GetPost: React.FC<ICommon> = ({ props, func, favorite }) => {
  return (
    <StyledBox>
      {props.map(item => {
        return (
          item.appId && (
            <StyledCard key={item.appId} id={item.appId}>
              <StyledImg src={item.imgUrl} alt={item.title} />
              <Box as={'p'} fontSize={'18px'} color={'white'}>
                {item.title}
              </Box>
              <Box as={'p'} fontSize={'18px'} color={'white'}>
                {item.released}
              </Box>
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
      })}
    </StyledBox>
  );
};
