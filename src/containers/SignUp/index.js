import React from 'react';
import {
  Container,
  LeftContainer,
  SignUpImage,
  RightContainer,
  FormGroup,
  InputLabel,
  Input,
  Button,
  LeftFooter
} from './styles';
import SignUpImg from '../../assets/8 1.svg';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate()

  const focusInput = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  }

  const login = () => {
    navigate('/login')
  }

  return (
    <Container>
      <LeftContainer>
        <SignUpImage src={SignUpImg} alt="SignUp Image" />
      </LeftContainer>
      <RightContainer>
        <h1>Cadastre-se</h1>
        <FormGroup>
          <InputLabel htmlFor="name" onClick={() => focusInput('name')}>
            Nome
          </InputLabel>
          <Input type="name" id="name" />
        </FormGroup>
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
        <FormGroup>
          <InputLabel htmlFor="confirmPassword" onClick={() => focusInput('confirmPassword')}>
            Confirmar Senha
          </InputLabel>
          <Input type="password" id="confirmPassword" />
        </FormGroup>
        <Button>Cadastrar</Button>
        <LeftFooter>
          Já possui uma conta? <a onClick={login}>Login</a>
        </LeftFooter>
      </RightContainer>
    </Container>
  );
}

export default SignUp;
