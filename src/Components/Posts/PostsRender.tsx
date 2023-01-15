import React, { useEffect, useState, useRef } from 'react';
import { IArrItem } from 'Types/gameItemsType';
import { IItem } from 'Types/gameItemsType';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';

import { GetPost } from './GetPost';
import { GetFilterPost } from './GetFilterPost';

export const PostRender: React.FC<IArrItem> = ({ props }): any => {
  const [likeList, setLikeList] = useState<IItem[]>(() => {
    const storedValues = localStorage.getItem('likeList');
    return storedValues ? JSON.parse(storedValues) : [];
  });
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('likeList', JSON.stringify(likeList));
  }, [likeList]);

  const likeButtonStatus = useSelector(
    (state: RootState) => state.setBtnStatus.statusLikeBtn
  );

  const eventToggler = (e: React.ChangeEvent<any>) => {
    const id = e.currentTarget.parentElement.parentElement.id;

    const addToLikeList = props.filter(item => item.appId === id);

    const duplex = likeList.find(item => item.appId === id);

    if (duplex) {
      const removeFromLikeList = likeList.filter(
        item => item.appId !== duplex.appId
      );
      setLikeList(removeFromLikeList);
    } else {
      setLikeList(prevState => {
        return [...prevState, ...addToLikeList];
      });
    }
  };

  return likeButtonStatus === 'search' ? (
    <GetPost props={props} favorite={likeList} func={eventToggler} />
  ) : (
    <GetFilterPost props={likeList} func={eventToggler} />
  );
};
