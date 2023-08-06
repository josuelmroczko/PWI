import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HeaderListaProdutos = ({ data }) => {
  return (
    <HeaderContainer>
      <div>{data.toLocaleDateString()}</div>
      <div>Produtos Disponíveis:</div>
    </HeaderContainer>
  );
};

export default HeaderListaProdutos;

