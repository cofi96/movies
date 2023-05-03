import { SyntheticEvent, useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { PrimaryButton } from '../../assets/styles/layout/buttons.style';
import { useUserContext } from '../../context/user.context';
import { useFormInput } from '../../hooks/useFormInput';
import { IsValidEmail, IsValidInput } from '../../utils/formValidation';
import {
  StyledBackgroundImg,
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledLogin,
  StyledTitle,
} from './login.style';

function Login() {
  const { user, login, signUp } = useUserContext();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const email = useFormInput('', (emailValue) => IsValidEmail(emailValue));
  const password = useFormInput('', (passwordValue) => IsValidInput(passwordValue));
  const firstName = useFormInput('', (firstNameValue) => IsValidInput(firstNameValue));
  const lastName = useFormInput('', (lastNameValue) => IsValidInput(lastNameValue));

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    return !isSignup
      ? login({ email: email.value, password: password.value })
      : signUp({
          email: email.value,
          password: password.value,
          firstName: firstName.value,
          lastName: lastName.value,
        });
  };

  const signInSignUpText = useMemo(() => (isSignup ? 'Sign Up' : 'Sign In'), [isSignup]);

  useEffect(() => {
    if (user) navigate(state || '/home');
  }, [user, navigate, state, login]);

  return (
    <StyledLogin>
      <StyledBackgroundImg />
      <StyledForm onSubmit={submitHandler}>
        <StyledTitle>{signInSignUpText}</StyledTitle>
        <StyledInputWrapper>
          <StyledInput type="text" onChange={email.onChange} />
          <StyledLabel $onFocus={!email.isEmpty}>Email or phone number</StyledLabel>
          {email.showError ? (
            <StyledErrorMessage>Please enter valid email</StyledErrorMessage>
          ) : null}
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledInput type="password" name="password" onChange={password.onChange} />
          <StyledLabel $onFocus={!password.isEmpty}>Password</StyledLabel>
          {password.showError ? (
            <StyledErrorMessage>Please enter valid password</StyledErrorMessage>
          ) : null}
        </StyledInputWrapper>
        {isSignup ? (
          <>
            <StyledInputWrapper>
              <StyledInput type="text" onChange={firstName.onChange} />
              <StyledLabel $onFocus={!firstName.isEmpty}>Enter first name</StyledLabel>
              {firstName.showError ? (
                <StyledErrorMessage>Please enter first name</StyledErrorMessage>
              ) : null}
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledInput type="text" onChange={lastName.onChange} />
              <StyledLabel $onFocus={!lastName.isEmpty}>Enter last anme</StyledLabel>
              {lastName.showError ? (
                <StyledErrorMessage>Please enter last name</StyledErrorMessage>
              ) : null}
            </StyledInputWrapper>
          </>
        ) : null}
        <StyledInputWrapper>
          <StyledCheckbox id="signUp" type="checkbox" onClick={() => setIsSignup(!isSignup)} />
          <StyledCheckboxLabel htmlFor="signUp">Sign up</StyledCheckboxLabel>
        </StyledInputWrapper>
        <PrimaryButton type="submit">{signInSignUpText}</PrimaryButton>
      </StyledForm>
    </StyledLogin>
  );
}

export default Login;
