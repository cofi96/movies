import styled, { css } from 'styled-components';

const StyledImagePadding = css`
  padding-right: 40px;
`;

export const StyledCard = styled.div`
  flex: 1 1 25%;
  max-width: 22%;
  padding: 0 20px;
  cursor: pointer;
`;

export const StyledImg = styled.img<{ $padding?: boolean }>`
  max-width: 100%;
  width: 100%;
  display: block;
  flex: 1 1 50%;
  object-fit: contain;
  align-self: flex-start;
  margin-bottom: 10px;
  ${({ $padding }) => $padding && StyledImagePadding}
`;

export const CardDescription = styled.div`
  background-color: #fff;
  display: block;
  max-width: 1000px;
  padding: 50px 20px;
  display: flex;
  position: relative;
`;

export const CardTextWrap = styled.div`
  flex: 1 1 50%;
`;

export const CardTitle = styled.h3`
  color: #000;
`;

export const CardInfo = styled.p`
  color: #000;
`;

export const StyledCloseButton = styled.button`
  padding: 3px;
  background-color: ${(props) => props.theme.red};
  position: absolute;
  top: 10px;
  right: 20px;
  outline: 0;
  border: 0;
  display: flex;
  opacity: 0.7;
  transition: 0.5s ease;
  .card__close-icon,
  path {
    color: #fff !important;
    font-size: 18px;
    stroke: #fff !important;
  }
  &:hover {
    opacity: 1;
  }
`;
