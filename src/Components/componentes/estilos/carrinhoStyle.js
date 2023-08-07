import styled from 'styled-components';
import colors from '../../cores/cores';

export const CarrinhoContainer = styled.div`
  position: absolute;
  display: flex;
  width: 345px;
  height: 680px;
  border: 1px solid #ccc;
  padding: 10px;
  left: 1000px;
  top: 10px;
  border: none;
  z-index: 55;

  .valorFinal{
    position: relative;
    left: 120px;
    width: 200PX;
    color: var(--blue-500, #002E6A);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 100% */
  }
  li {
    position: relative;
    display: flex;
    background-color: ${colors.branco};
    margin: 5px;
    border-radius: 10px;
    border: 1px solid var(--gray-6, #F2F2F2);
  }

  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 450px;
    overflow: scroll;
    top: 10px;
  }

  h2 {
    position: relative;
    top: -58px;
    left: 100px;
    color: ${colors.azul};
    font-family: 'Fredoka', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 31.92px;
  }

  p {
    position: relative;
    top: 530px;
    right: 200px;
  }
`;

export const CarrinhoLista = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CarrinhoItem = styled.li`
  position: relative;
  left: 30px;
  width: 416px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .maismenos{
    border-radius: 100%;
    padding: 5px;
    background-color: ${colors.branco};
    top: 1px;
    z-index: 99;
    border: 1px solid ${colors.cinzaClaro};
    color: ${colors.laranjaAvermelhado};
  }
  span {
    position: relative;
    top: -30px;
    left: 10px;
    width: 100px;
  }

  button {
    position: relative;
    display: flex;
    left: -20px;
    display: flex;
    flex-direction: column;
  }
  .fechar{
    position: relative;
    bottom: 40px;
    left: 25px;
    background-color: transparent;
    border: none;
    color: ${colors.laranjaAvermelhado};
  }
  .valores{
    position: relative;
    display: flex;
    flex-direction: column;
    left: 0px;
    top: -10px;
    width: 350px;
    color: var(--blue-500, #002E6A);
 
 
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;  
    img{
      width: 20px;
    }
  }

`;

export const CupomInput = styled.input`
  /* Estilos do input */
`;
