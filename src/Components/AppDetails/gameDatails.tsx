import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameDetails } from 'Service/getSearch.service';
import { IAppDetails } from 'Types/gameItemsType';
import { Box } from 'Theme/Box';
import { isLoadedStatus } from 'Redux/Pagination/paginationSlice';
import { SpinnerCircular } from 'spinners-react';
import { RootState } from 'Redux/store';

export const GameDatails: React.FC = () => {
  const [gameDetails, setGameDetails] = useState<Partial<IAppDetails>>({});
  const { detailsId } = useParams();
  const { isLoaded } = useSelector(
    (state: RootState) => state.setPaginationStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getGameDatails = async (id: string) => {
      dispatch(isLoadedStatus(false));
      const data = await fetchGameDetails(id);

      if (data === undefined) {
        return;
      }
      setGameDetails(data);
      dispatch(isLoadedStatus(true));
    };

    if (detailsId) {
      getGameDatails(detailsId);
    }
  }, [detailsId, dispatch]);

  console.log(gameDetails);

  return (
    <Box>
      {!isLoaded && (
        <Box
          ml={'auto'}
          mr={'auto'}
          display={'flex'}
          justifyContent={'center'}
          mt={4}
        >
          <SpinnerCircular />
        </Box>
      )}
      {gameDetails && isLoaded && (
        <Box mt={4}>
          <img src={gameDetails.imgUrl} alt="" />
          <Box as={'p'} color={'white'} fontSize={4} mb={4} mt={4}>
            Description: {gameDetails.description}
          </Box>
          <Box as={'p'} color={'white'} fontSize={4} mb={4}>
            Released: {gameDetails.released}
          </Box>
          <Box as={'p'} color={'white'} fontSize={4}>
            Price: {gameDetails.price}
          </Box>
        </Box>
      )}
    </Box>
  );
};
