import React from 'react';
import {
  Container,
  LeftContainer,
  LoginImage,
  RightContainer,
  FormGroup,
  InputLabel,
  Input,
  LeftFooter,
  Error
} from './styles';
import Button from '../../components/Button'
import LoginImg from '../../assets/9 1.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { toast } from 'react-toastify'

function Login() {

  //Variables
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo 6 digítos')
  })

  const { 
    register,
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()

  //Functions
  const onSubmit =  async clientData => {
      const response = await toast.promise(
        api.post('sessions',{
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: "Verificando seus dados",
        success: "Seja bem-vindo(a)",
        error: "Verifique seu e-mail e senha"
      }
    )

      console.log(response);
  }

  const focusInput = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  }

  const signUp = () => {
    navigate("/signup")
  }

  return (
    <Container>

      <LeftContainer>
        <LoginImage src={LoginImg} alt="Login Image" />
      </LeftContainer>

      <RightContainer>

        <h1>Login</h1>
        
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <FormGroup>
            <InputLabel htmlFor="email" onClick={() => focusInput('email')}>
              Email
            </InputLabel>
            <Input type="email" id="email" {...register("email")} error={errors.email?.message} />
            <Error>{errors.email?.message}</Error>
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="password" onClick={() => focusInput('password')}>
              Senha
            </InputLabel>
            <Input type="password" id="password" {...register("password")} error={errors.password?.message} />
            <Error>{errors.password?.message}</Error>
          </FormGroup>

          <Button type="submit" style={{marginTop: 5 , marginBottom: 20}}>Entrar</Button>

        </form>

        <LeftFooter>
          Não possui uma conta? <a onClick={signUp}>Cadastre-se</a>
        </LeftFooter>

      </RightContainer>

    </Container>
  );
}

export default Login;
