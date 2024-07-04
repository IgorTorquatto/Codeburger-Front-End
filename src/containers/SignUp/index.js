import React from 'react';
import {
  Container,
  LeftContainer,
  SignUpImage,
  RightContainer,
  FormGroup,
  InputLabel,
  Input,
  LeftFooter,
  Error
} from './styles';
import Button from '../../components/Button'
import SignUpImg from '../../assets/8 1.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { toast } from 'react-toastify'

function SignUp() {

  //Variables
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo 6 digítos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const { 
    register,
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  
  const navigate = useNavigate()

  //Functions
  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

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

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <FormGroup>
            <InputLabel htmlFor="name" onClick={() => focusInput('name')}>
              Nome
            </InputLabel>
            <Input type="name" id="name" {...register("name")} error={errors.name?.message}/>
            <Error>{errors.name?.message}</Error>
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="email" onClick={() => focusInput('email')}>
              Email
            </InputLabel>
            <Input type="email" id="email" {...register("email")}  error={errors.email?.message}/>
            <Error>{errors.email?.message}</Error>
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="password" onClick={() => focusInput('password')}>
              Senha
            </InputLabel>
            <Input type="password" id="password" {...register("password")}  error={errors.password?.message}/>
            <Error>{errors.password?.message}</Error>
          </FormGroup>

          <FormGroup>
            <InputLabel htmlFor="confirmPassword" onClick={() => focusInput('confirmPassword')}>
              Confirmar Senha
            </InputLabel>
            <Input type="password" id="confirmPassword" {...register("confirmPassword")} error={errors.confirmPassword?.message}/>
            <Error>{errors.confirmPassword?.message}</Error>
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
