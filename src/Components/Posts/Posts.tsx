import React, { useState, useEffect } from 'react';
import useDebounce from 'Helpers/debounce';
import { PostRender } from './PostsRender';
import { useSelector } from 'react-redux';
import { searchGameByName } from 'Service/getSearch.service';
import { RootState } from 'Redux/store';
import { IItem } from 'Types/gameItemsType';

export const Posts: React.FC = () => {
  const [gamePost, setGamePost] = useState<IItem[]>([]);

  const inputValue = useSelector((state: RootState) => state.setGame.value);
  const debouncedValue = useDebounce<string>(inputValue, 500);

  useEffect(() => {
    interface IParams {
      page: string;
      search: string;
    }

    const params: IParams = {
      page: '1',
      search: debouncedValue,
    };

    if (!params.search) {
      return;
    }

    const getApiData = async (params: IParams) => {
      const data = await searchGameByName(params);
      setGamePost(data);
    };

    getApiData(params);
  }, [debouncedValue]);

  return <PostRender props={gamePost} />;
};
