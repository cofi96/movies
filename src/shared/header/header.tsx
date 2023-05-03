import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar';
import { StyledHeader, StyledLeftSide, StyledSingOutButton } from './header.style';
import { MOVIE_OPTIONS, useMoviesContext } from '../../context/movies.context';
import { useUserContext } from '../../context/user.context';
import Dropdown from '../../components/dropdown/dropdown';

function Header() {
  const { setSearch, setCategory, category } = useMoviesContext();
  const { logOut } = useUserContext();
  const navigate = useNavigate();

  const logOutHandler = () => {
    logOut();
    navigate('/');
  };
  return (
    <StyledHeader>
      <SearchBar onChange={setSearch} />
      <StyledLeftSide>
        <Dropdown
          multiple
          value={category}
          options={MOVIE_OPTIONS}
          onChange={(option) => {
            setCategory(option);
          }}
        />
        <StyledSingOutButton onClick={logOutHandler}>Sign out</StyledSingOutButton>
      </StyledLeftSide>
    </StyledHeader>
  );
}

export default Header;
