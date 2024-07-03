import React from 'react';
import {
  Container,
  LeftContainer,
  SignUpImage,
  RightContainer,
  FormGroup,
  InputLabel,
  Input,
  LeftFooter
} from './styles';
import Button from '../../components/Button'
import SignUpImg from '../../assets/8 1.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function SignUp() {

  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = data => console.log(data);

  const focusInput = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  }

  const login = () => {
    navigate('/')
  }

  return (
    <Container>
      <LeftContainer>
        <SignUpImage src={SignUpImg} alt="SignUp Image" />
      </LeftContainer>
      <RightContainer>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <InputLabel htmlFor="name" onClick={() => focusInput('name')}>
              Nome
            </InputLabel>
            <Input type="name" id="name" {...register("nome")} />
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="email" onClick={() => focusInput('email')}>
              Email
            </InputLabel>
            <Input type="email" id="email" {...register("email")}/>
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="password" onClick={() => focusInput('password')}>
              Senha
            </InputLabel>
            <Input type="password" id="password" {...register("password")}/>
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="confirmPassword" onClick={() => focusInput('confirmPassword')}>
              Confirmar Senha
            </InputLabel>
            <Input type="password" id="confirmPassword" {...register("confirmPassword")}/>
          </FormGroup>
          <Button type="submit" style={{marginTop: 5 , marginBottom: 20}}>Cadastrar</Button>
        </form>
        <LeftFooter>
          Já possui uma conta? <a onClick={login}>Login</a>
        </LeftFooter>
      </RightContainer>
    </Container>
  );
}

export default SignUp;
