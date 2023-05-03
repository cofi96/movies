import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border-radius: 4px;
  outline: 0;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 12px;
  background-color: ${(props) => props.theme.red};
  width: 100%;
  color: ${(props) => props.theme.white};
  min-height: 50px;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.color4};
  }
`;
