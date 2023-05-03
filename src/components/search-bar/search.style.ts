import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  flex: 0 0 50%;
  position: relative;
  .icon,
  path {
    color: #fff;
    position: absolute;
    top: 4px;
  }
`;

export const SearchBarInput = styled.input`
  width: 100%;
  max-width: 300px;
  background-color: transparent;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #fff;
  border-radius: 2px;
  color: #fff;
  padding-left: 20px;
  padding-bottom: 1px;
`;
