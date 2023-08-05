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
  h2{
    position: relative;
    top: -58px;
    left: 100px;
  }
  p{
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

  span {
   position: relative;
   top: -30px;
   left: 10px;
  }

  button {
    position: relative;
    display: flex;
    flex-direction: column;
  
  }

`;

export const CupomInput = styled.input`
  /* Estilos do input */
`;
