import React from 'react';
import {
  Container,
  LeftContainer,
  LoginImage,
  RightContainer,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Register
} from './styles';
import LoginImg from '../../assets/9 1.svg';

function Login() {
  const focusInput = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <Container>
      <LeftContainer>
        <LoginImage src={LoginImg} alt="Login Image" />
      </LeftContainer>
      <RightContainer>
        <h1>Login</h1>
        <FormGroup>
          <InputLabel htmlFor="email" onClick={() => focusInput('email')}>
            Email
          </InputLabel>
          <Input type="email" id="email" />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="password" onClick={() => focusInput('password')}>
            Password
          </InputLabel>
          <Input type="password" id="password" />
        </FormGroup>
        <Button>Sign In</Button>
        <Register>
          Don't have an account? <a href="#">Sign Up</a>
        </Register>
      </RightContainer>
    </Container>
  );
}

export default Login;
