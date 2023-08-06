import styled from 'styled-components';

export const CalendarioContainer = styled.div`
  /* Estilos para o container do calendário, se necessário */
`;

export const CalendarioWrapper = styled.div`
  /* Estilos para o wrapper do calendário, se necessário */
`;

export const ListaProdutosWrapper = styled.div`
  /* Estilos para o wrapper da lista de produtos, se necessário */
`;

export const ProdutosContainer = styled.div`
  /* Estilos para o container de produtos, se necessário */
`;

export const ProdutoItem = styled.div`
  /* Estilos para o item do produto, se necessário */
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
  position: absolute;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiaNumero = styled.div`
  font-size: 15px;
  color: ${(props) => (props.isMesAtual ? (props.isSelected ? '#FFFFFF' : '#000') : '#ccc')};
  color: ${(props) => (props.diaDaSemana === 6 || props.diaDaSemana === 0 ? 'red' : 'inherit')};
  /* Adicione um tamanho fixo para a div que envolve o número */
  width: 20px;
  height: 20px;
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
