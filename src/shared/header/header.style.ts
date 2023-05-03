import styled from 'styled-components';
import { PrimaryButton } from '../../assets/styles/layout/buttons.style';

export const StyledHeader = styled.header`
  background-color: #000;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;
`;

export const StyledLeftSide = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: flex-end;
`;

export const StyledSingOutButton = styled(PrimaryButton)`
  min-height: unset;
  padding: 7px;
  margin: 0 0 0 15px;
  max-width: 100px;
`;
