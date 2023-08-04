import styled from 'styled-components';
import colors from '../../cores/cores';

export const ListaProdutosContainer = styled.div`
  width: 475px;
  height: 500px;
  position: relative;
  left: 165px;
  border: 1px solid #ccc;
  padding: 10px;
  overflow-y: auto;
  border: none;


`;

export const ListaProdutosLista = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProdutoItemContainer = styled.li`
position: relative;
  display: flex;
  justify-content: space-between;
  top: 100px;
  background-color: aliceblue;
  align-items: center;
  margin-bottom: 5px;
  height: 100px;
  border-radius: 10px;
border: 1px solid var(--gray-6, #F2F2F2);
background: ${colors.branco};

 
`;

export const ProdutoImagem = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
  
`;

export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProdutoNome = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProdutoValorHorario = styled.div`
  display: flex;
  align-items: center;
`;

export const ProdutoValor = styled.span`
  margin-right: 10px;
`;

export const ProdutoHorario = styled.span`
  font-style: italic;
`;

export const ProdutoBotao = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;