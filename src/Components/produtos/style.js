import styled from 'styled-components';
import colors from '../cores/cores';

export const EstiloProduto = styled.div`
  position: relative;
  width: 1516px;
  height: 1000px;
  overflow: hidden;

  .retanguloAzulEscuro {
    position: relative;
    background-color: ${colors.azul};
    height: 450px;
    width: 100%;
    bottom: 5px;
  }
`;

export const AzulMaisClaroSVG = styled.svg`
  position: relative;
  width: 1516px;
  top: 0px;
  left: 0px;
  z-index: 2;
`;

export const AzulEscuroSVG = styled.svg`
  position: absolute;
  top: 0px;
  left: 241.32px;
`;

export const FundoAzulMaisClaroSVG = styled.svg`
  position: absolute;
  top: 700px;
  left: 0;
  z-index: 2;
`;

export const FundoAzulEscuroSVG = styled.svg`
  position: absolute;
  
  top: 720px;
  right: 241.32px;
`;

export const ConteudoProduto = styled.div`
position: relative;
bottom: 60%;
display: flex;
justify-content: center;
padding: 20px 30px 30px 30px;

z-index: 4;

.liConteudoProduto{
  width: 475px ;
  height: 680px;
  border-radius: 20px;
  background-color: ${colors.azulclaro};
  
  }
`;
