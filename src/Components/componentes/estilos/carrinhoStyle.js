import styled from 'styled-components';

export const CarrinhoContainer = styled.div`
  width: 475px;
  height: 680px;
  border: 1px solid #ccc;
  padding: 10px;
  left: 480px;
   top: 10px;
   border: none;
  position: relative; /* Adicione a posição relativa ao contêiner do carrinho */
  z-index: 55; /* Adicione o z-index para o carrinho ficar acima dos outros componentes */
  
  /* Adiciona margin-bottom de 100px para criar a distância entre os itens */
  li {
    margin-bottom: 100px;
  }
`;

export const CarrinhoLista = styled.ul`
  list-style: none;
  padding: 0;
`;


export const CarrinhoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    flex: 1;
  }

  button {
    margin-left: 10px;
  }
`;
