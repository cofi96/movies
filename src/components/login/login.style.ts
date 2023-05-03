import styled, { css } from 'styled-components';

export const onFocusModifier = css`
  font-size: 11px;
  top: 3px;
`;

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const StyledForm = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 60px 68px 40px;
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
  display: block;
`;

export const StyledBackgroundImg = styled.img`
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
`;

export const StyledInput = styled.input<{ $background?: boolean }>`
  border: 0;
  border-radius: 4px;
  color: ${(props) => props.theme.white};
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  width: 100%;
  background: ${(props) => props.theme.color2};
  &:focus {
    & + label {
      font-size: 11px;
      top: 3px;
    }
  }
`;

export const StyledInputWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

export const StyledLabel = styled.label<{ $onFocus?: boolean }>`
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 4px;
  padding: 0px 20px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 20px;
  pointer-events: none;
  transition: 0.3s ease;
  font-size: 14px;
  color: ${(props) => props.theme.color3};
  ${({ $onFocus }) => ($onFocus ? onFocusModifier : null)}
`;

export const StyledErrorMessage = styled.span``;

export const StyledCheckboxLabel = styled.label`
  display: inline-block;
  margin-left: 10px;
`;

export const StyledCheckbox = styled.input`
  &:not(:checked) {
    ~ label {
      opacity: 0.5;
    }
  }
`;
