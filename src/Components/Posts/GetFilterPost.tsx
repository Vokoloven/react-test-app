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

// import { RootState } from 'Redux/store';

interface ICommon {
  props: IItem[];
  func: (e: React.ChangeEvent<any>) => void;
  idHandler: (e: React.ChangeEvent<any>) => void;
}

export const GetFilterPost: React.FC<ICommon> = ({
  props,
  func,
  idHandler,
}) => {
  return (
    <StyledBox>
      {props.map(item => {
        return (
          item.appId && (
            <StyledCard key={item.appId} id={item.appId} onClick={idHandler}>
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
