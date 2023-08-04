import styled from 'styled-components';

export const CalendarioContainer = styled.div`

`;

export const CalendarioWrapper = styled.div`

`;

export const ListaProdutosWrapper = styled.div`

`;

export const ProdutosContainer = styled.div`

`;

export const ProdutoItem = styled.div`

`;

// Estilos do carrinho
export const CarrinhoContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 55;
`;

export const DiaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiaNumeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiaNumero = styled.div`
  font-size: 15px;
  color: ${(props) => (props.isMesAtual ? (props.isSelected ? '#FFFFFF' : '#000') : '#ccc')};
  color: ${(props) => (props.diaDaSemana === 6 || props.diaDaSemana === 0 ? 'red' : 'inherit')};
  /* Adicione um tamanho fixo para a div que envolve o número */
  width: 24px;
  height: 24px;
  /* Defina a largura e altura iguais para obter um círculo perfeito */
  border-radius: 50%;
  /* Centralizar o número dentro do círculo */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Adicione a cor de fundo do círculo */
  background-color: #007bff;
  color: white;
`;
