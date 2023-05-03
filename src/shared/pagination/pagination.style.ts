import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const StyledPaginationButton = styled.button`
  background-color: ${(props) => props.theme.red};
  border: 0;
  outline: 0;
  color: ${(props) => props.theme.white};
  padding: 3px;
  min-width: 20px;
  min-height: 20px;
  margin: 0 3px;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.color4};
  }
`;
