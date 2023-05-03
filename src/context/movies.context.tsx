import { useContext, useMemo, useState, createContext, ReactElement } from 'react';
import axios from 'axios';
import { Movie } from '../models/movie';

const MoviesContext = createContext<Value>({
  movies: [],
  filteredMovies: [],
  setSearch: () => {},
  setCategory: () => {},
  getMovies: () => {},
  category: [],
});

export function useMoviesContext() {
  return useContext(MoviesContext);
}
const MOVIES_API_URL = `${process.env.REACT_APP_BASE_API_URL}/movies`;

type Value = {
  movies: Movie[];
  filteredMovies: Movie[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
  getMovies: () => void;
  category: string[];
};

export const MOVIE_OPTIONS: any = [
  { value: '', label: 'All' },
  { value: 'Action', label: 'Action' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Sci-fi', label: 'Sci-fi' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Biography', label: 'Biography' },
];

export function MoviesContextProvider({ children }: { children: ReactElement }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string[]>([MOVIE_OPTIONS[0].value]);

  const getMovies = async () => {
    try {
      const { data } = await axios.get<Movie[]>(MOVIES_API_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMovies(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const filteredMovies = useMemo(
    () =>
      movies
        .filter(
          (movie: Movie) =>
            (category.length === 1 && category[0] === '') || category.includes(movie.genre),
        )
        .filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase())),
    [movies, category, search],
  );

  const value: Value = useMemo(
    () => ({
      movies,
      filteredMovies,
      setSearch,
      setCategory,
      getMovies,
      category,
    }),
    [movies, filteredMovies, setSearch, setCategory, getMovies, category],
  );

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
}
