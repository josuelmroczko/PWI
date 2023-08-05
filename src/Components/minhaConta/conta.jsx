import React from 'react';
import { Button, Input, Link, LoginContainer, Title } from './loginStyle';


const LoginComponent = () => {
  return (
    <LoginContainer>
      <Title>Entrar</Title>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Button className='entrar'>Entrar</Button>
      <p>
        <Link className='novaSenha' href="#">Esqueci minha senha</Link>
      </p>
      <p className='novaConta'>Ainda não possui conta?</p>
      <Button className='Cadastrar'>Cadastrar</Button>
      <Button className='ativação'>Reenviar link de ativação de conta</Button>
    </LoginContainer>
  );
};

export default LoginComponent;
