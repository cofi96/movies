import { SyntheticEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import { SearchBarInput, StyledSearchBar } from './search.style';

type Props = {
  onChange: (event: string) => void;
};

function SearchBar({ onChange }: Props) {
  const onSearchHandler = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    onChange(value);
  };

  return (
    <StyledSearchBar>
      <BiSearch className="icon" />
      <SearchBarInput onChange={onSearchHandler} />
    </StyledSearchBar>
  );
}

export default SearchBar;
