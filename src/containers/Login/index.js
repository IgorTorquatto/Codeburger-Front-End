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
  LeftFooter
} from './styles';
import LoginImg from '../../assets/9 1.svg';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const focusInput = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  }

  const signUp = ()=>{
    navigate("/signup")
  }

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
            Senha
          </InputLabel>
          <Input type="password" id="password" />
        </FormGroup>
        <Button>Entrar</Button>
        <LeftFooter>
          Não possui uma conta? <a onClick={signUp}>Cadastre-se</a>
        </LeftFooter>
      </RightContainer>
    </Container>
  );
}

export default Login;
