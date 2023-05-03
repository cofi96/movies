import Card from '../card/card';
import { Movie } from '../../models/movie';
import { useMoviesContext } from '../../context/movies.context';
import { usePagination } from '../../hooks/usePagination';
import Pagination from '../../shared/pagination/pagination';
import { StyledCardList, StyledContainer } from './card-list.style';

function CardList() {
  const { filteredMovies } = useMoviesContext();
  const { numberOfPages, startIndexPosition, endIndexPosition, onSelectPage } = usePagination(
    filteredMovies.length,
    8,
  );
  return (
    <>
      <StyledCardList>
        <StyledContainer>
          {filteredMovies.slice(startIndexPosition, endIndexPosition).map((movie: Movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </StyledContainer>
      </StyledCardList>
      <Pagination paginationLength={numberOfPages} onPageClick={onSelectPage} />
    </>
  );
}

export default CardList;
