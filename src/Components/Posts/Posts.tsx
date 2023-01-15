import React, { useState, useEffect } from 'react';
import useDebounce from 'Helpers/debounce';
import { PostRender } from './PostsRender';
import { useSelector, useDispatch } from 'react-redux';
import { searchGameByName } from 'Service/getSearch.service';
import { RootState } from 'Redux/store';
import { IItem } from 'Types/gameItemsType';
import { Pagination } from 'Components/Pagination/Pagination';
import {
  isResponeStatus,
  isLoadedStatus,
} from 'Redux/Pagination/paginationSlice';
import { SpinnerCircular } from 'spinners-react';
import { Box } from 'Theme/Box';

export const Posts: React.FC = () => {
  const [gamePost, setGamePost] = useState<IItem[]>([]);
  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.setGame.value);
  const debouncedValue = useDebounce<string>(inputValue, 500);
  const { currentPage } = useSelector(
    (state: RootState) => state.setPaginationStatus
  );
  const { isLoaded } = useSelector(
    (state: RootState) => state.setPaginationStatus
  );

  useEffect(() => {
    interface IParams {
      page: number;
      search: string;
    }

    if (debouncedValue === '') {
      setGamePost(() => []);
    }

    const params: IParams = {
      page: currentPage,
      search: debouncedValue,
    };

    if (!params.search) {
      return;
    }

    const getApiData = async (params: IParams) => {
      dispatch(isLoadedStatus(false));
      const data = await searchGameByName(params);
      if (data.length === 0) {
        dispatch(isResponeStatus(true));
      } else {
        dispatch(isResponeStatus(false));
      }
      setGamePost(data);
      dispatch(isLoadedStatus(true));
    };

    getApiData(params);
  }, [currentPage, debouncedValue, dispatch]);

  return (
    <Box mb={4}>
      <PostRender props={gamePost} />
      {!isLoaded && (
        <Box
          ml={'auto'}
          mr={'auto'}
          display={'flex'}
          justifyContent={'center'}
          mt={4}
          mb={4}
        >
          <SpinnerCircular />
        </Box>
      )}
      <Pagination />
    </Box>
  );
};
