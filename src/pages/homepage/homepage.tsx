import { useEffect } from 'react';
import CardList from '../../components/card-list/card-list';

import Slider from '../../components/slider/slider';
import { useMoviesContext } from '../../context/movies.context';

function Homepage() {
  const { movies, getMovies } = useMoviesContext();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Slider items={movies} />
      <div className="App">
        <CardList />
      </div>
    </>
  );
}

export default Homepage;
