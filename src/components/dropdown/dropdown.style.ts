import styled, { css } from 'styled-components';

export const openDropdownModifier = css`
  ul {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
  button {
    svg {
      transform: rotateX(-180deg);
      top: 14px;
    }
  }
`;

export const StyledDropdown = styled.div<{ $active?: boolean }>`
  max-width: 200px;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  border-radius: 10px;
  position: relative;
  ${({ $active }) => ($active ? openDropdownModifier : null)}
`;

export const StyledDropdownSelected = styled.button`
  border: 1px solid ${(props) => props.theme.black};
  display: block;
  width: 100%;
  text-align: left;
  height: 50px;
  outline: 0;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => props.theme.white};
  position: relative;
  padding-right: 30px;
  svg {
    position: absolute;
    transition: 0.3s ease;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    transform-origin: center;
  }
`;

export const StyledDropdownList = styled.ul`
  background-color: ${(props) => props.theme.white};
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  width: 100%;
  padding: 5px 0;
  border-radius: 5px;
  transform: translateY(50px);
  transition: 0.3s ease;
  visibility: hidden;
  opacity: 0;
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 30px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-bottom: 10px solid ${(props) => props.theme.white};
  }
`;

export const StyledDropdownOption = styled.li`
  padding: 7px 10px;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: ${(props) => props.theme.color5};
  }
`;

export const StyledDropdownLabel = styled.span`
  font-size: 10px;
  margin-left: 3px;
  margin-bottom: 3px;
  padding: 3px;
  border-radius: 5px;
  color: ${(prop) => prop.theme.white};
  overflow: hidden;
  background: ${(prop) => prop.theme.red};
  display: inline-block;
  max-width: 51px;
  width: 100%;
  text-align: center;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(prop) => prop.theme.color4};
  }
`;
