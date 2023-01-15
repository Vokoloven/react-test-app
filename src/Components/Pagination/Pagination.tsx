import React, { useState, useEffect } from 'react';
import { isCurrentPage } from 'Redux/Pagination/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Redux/store';
import {
  StyledNumEclipse,
  StyledList,
  StyledArrowEclipseLeft,
  StyledArrowEclipseRight,
} from '../Pagination/StyledComponents/StyledPagination';
import { Box } from 'Theme/Box';

export const Pagination: React.FC = () => {
  const [firstPage, setFirstPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number[] = [];
  const dispatch = useDispatch();

  const isRenderedPage = useSelector(
    (state: RootState) => state.setPaginationStatus.isResponse
  );
  const { statusLikeBtn } = useSelector(
    (state: RootState) => state.setBtnStatus
  );
  const { isResponse } = useSelector(
    (state: RootState) => state.setPaginationStatus
  );
  const inputValue = useSelector((state: RootState) => state.setGame.value);

  const handlerCurrentPage = (page: number): void => {
    setCurrentPage(() => page);
  };

  const incrementPage = (): void => {
    if (isRenderedPage) {
      return;
    }

    setFirstPage(() => firstPage + 1);
    setLastPage(() => lastPage + 1);
    setCurrentPage(lastPage + 1);
  };

  const decrementPage = (): void => {
    if (firstPage > 1) {
      setFirstPage(() => firstPage - 1);
      setLastPage(() => lastPage - 1);
      setCurrentPage(firstPage - 1);
    }
  };

  for (let i = firstPage; i <= lastPage; i++) {
    totalPages.push(i);
  }

  useEffect(() => {
    dispatch(isCurrentPage(currentPage));
  }, [currentPage, dispatch]);

  return (
    <Box>
      {statusLikeBtn === 'search' && !isResponse && inputValue !== '' && (
        <Box display={'flex'} justifyContent="center">
          <StyledArrowEclipseLeft id={'left'} onClick={decrementPage}>
            {'<'}
          </StyledArrowEclipseLeft>
          <StyledList>
            {totalPages.map((page, index) => {
              return (
                <StyledNumEclipse
                  className={currentPage === page ? 'active' : 'inactive'}
                  onClick={() => handlerCurrentPage(page)}
                  key={index}
                >
                  {page}
                </StyledNumEclipse>
              );
            })}
          </StyledList>
          <StyledArrowEclipseRight id={'right'} onClick={incrementPage}>
            {'>'}
          </StyledArrowEclipseRight>
        </Box>
      )}
    </Box>
  );
};
