import styled from 'styled-components';
import colors from '../cores/cores';

 export const LoginContainer = styled.div`
  position: absolute;
  background-color: aliceblue;
  top: 350px;
  width: 430px;
  left: 50%; 
  transform: translate(-50%, -50%);  
  border-radius: 20px;
  height: 389px;
  display: flex;
  flex-direction: column;
  align-items: center;
 

  .entrar {
    position: relative;
    right: 152px;
    height: 35px;
    width: 66px;
    padding-left: 16px;
    bottom: 20px;
    background-color: ${colors.azul};
  }

  .novaSenha {
    position: relative;
    bottom: 50px;
    left: 100px;
    color: ${colors.cinzaMedio};
  }

  .novaConta {
    position: relative;
    bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 370px;
    color: var(--orange-500, #F76707);
  }

  /* Linhas laterais da .novaConta */
  .novaConta::before,
  .novaConta::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 88px; /* Ajuste o tamanho da linha conforme necessário */
    height: 2px; /* Espessura da linha */
    background-color: ${colors.cinzaClaro};
    transform: translateY(-50%);
  }

  .novaConta::before {
    left: 0;
  }

  .novaConta::after {
    right: 0;
  }

  .Cadastrar,
  .ativação {
    position: relative;
    bottom: 10px;
    width: 370px;
    height: 35px;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
  }

  .Cadastrar {
    background-color: ${colors.laranjaAvermelhado};
    color: var(--white, #FFF);
  }

  .ativação {
    display: flex;
    border-radius: 5px;
    color: ${colors.laranjaAvermelhado};
    border: 1px solid var(--orange-500, #F76707);
    background: var(--white, #FFF);
  }
`;

export  const Title = styled.h2`
  margin-top: 20px;
  color: ${colors.azul};
`;

export  const Input = styled.input`
  margin-top: 10px;
  width: 370px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;