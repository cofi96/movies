import { useCallback, useEffect, useMemo, useState } from 'react';

export interface UserPaginationHookResult {
  currentPage: number;
  numberOfPages: number;
  startIndexPosition: number;
  endIndexPosition: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onSelectPage: (numberOfPages: number) => void;
}

type Props = (numberOfDesplayedItems: number, resultsPerPage: number) => UserPaginationHookResult;

export const usePagination: Props = (numberOfDesplayedItems, resultsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(numberOfDesplayedItems / resultsPerPage);
  const startIndexPosition = useMemo(
    () => (currentPage - 1) * resultsPerPage,
    [currentPage, resultsPerPage],
  );
  const endIndexPosition = useMemo(
    () => currentPage * resultsPerPage,
    [currentPage, resultsPerPage],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [numberOfDesplayedItems]);

  const onPrevClick = useCallback(() => {
    setCurrentPage((prevState) => prevState - 1);
  }, []);

  const onNextClick = useCallback(() => {
    setCurrentPage((prevState) => prevState + 1);
  }, []);

  const onSelectPage = useCallback((numberofPages: number) => {
    setCurrentPage(numberofPages);
  }, []);

  return {
    currentPage,
    numberOfPages,
    startIndexPosition,
    endIndexPosition,
    onPrevClick,
    onNextClick,
    onSelectPage,
  };
};
