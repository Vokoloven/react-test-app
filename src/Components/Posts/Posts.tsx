import React, { useState, useEffect } from 'react';
import useDebounce from 'Helpers/debounce';
import { PostRender } from './PostsReander';
import { useSelector } from 'react-redux';
import { searchGameByName } from 'Service/getSearch.service';
import { RootState } from 'Redux/store';

export const Posts: React.FC = () => {
  const [gamePost, setGamePost] = useState<
    {
      appId: string;
      imgUrl: string;
      price: string;
      released: string;
      reviewSummary: string;
      title: string;
      url: string;
    }[]
  >([]);

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
