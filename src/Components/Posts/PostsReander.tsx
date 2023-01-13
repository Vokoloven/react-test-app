import React, { useState } from 'react';
import { IArrItem } from 'Types/gameItemsType';
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

export const PostRender: React.FC<IArrItem> = ({ props }): any => {
  const [icon, setIcon] = useState<boolean>(false);

  const eventToggler = (e: React.ChangeEvent<any>) => {
    const id = e.currentTarget.parentElement.parentElement.id;

    console.log(id);

    setIcon(!icon);
  };

  return (
    props.length > 0 && (
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
                  <StyledLikeButton onClick={eventToggler}>
                    {icon ? (
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
    )
  );
};
