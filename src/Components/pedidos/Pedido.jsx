import React, { useState } from 'react';
import styled from 'styled-components';

const PedidoComponentWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 500px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
      background-color: #0056b3;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 5px;
    }
  }
`;

const PedidoComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [secondListExpanded, setSecondListExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleSecondListExpand = () => {
    setSecondListExpanded(!secondListExpanded);
  };

  return (
    <PedidoComponentWrapper>
      <h2>Pedido número 2539</h2>
      <p>Realizado em abril de 2023</p>

      {/* Primeira lista */}
      <button onClick={toggleExpand}>
        {expanded ? 'Voltar' : 'Expandir'}
      </button>
      {expanded && (
        <div>
          <ul>
            <li>Meia entrada infantil</li>
            <li>Quantidade: 1</li>
            <li>Valor do produto: R$ 30,00</li>
            <li>Valor total: R$ 30,00</li>
          </ul>
          <button onClick={toggleSecondListExpand}>
            {secondListExpanded ? 'Voltar' : 'Outro botão'}
          </button>
          {secondListExpanded && (
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
            </ul>
          )}
        </div>
      )}

      {/* Segunda lista */}
      <button onClick={toggleSecondListExpand}>
        {secondListExpanded ? 'Voltar' : 'Expandir'}
      </button>
      {secondListExpanded && (
        <div>
          <ul>
            <li>Meia entrada infantil</li>
            <li>Quantidade: 1</li>
            <li>Valor do produto: R$ 30,00</li>
            <li>Valor total: R$ 30,00</li>
          </ul>
          <button onClick={toggleSecondListExpand}>
            {secondListExpanded ? 'Voltar' : 'Outro botão'}
          </button>
          {secondListExpanded && (
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
            </ul>
          )}
        </div>
      )}
    </PedidoComponentWrapper>
  );
};

export default PedidoComponent;
