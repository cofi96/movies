import { StyledPagination, StyledPaginationButton } from './pagination.style';

type Props = {
  paginationLength: number;
  onPageClick: (index: number) => void;
};

function Pagination({ paginationLength, onPageClick }: Props) {
  return (
    <StyledPagination>
      {[...Array(paginationLength)].map((page, index) => (
        <StyledPaginationButton
          onClick={() => {
            onPageClick(index + 1);
          }}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {index + 1}
        </StyledPaginationButton>
      ))}
    </StyledPagination>
  );
}

export default Pagination;
