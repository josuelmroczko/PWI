import React from 'react';
import { styled } from 'styled-components';

const DataAtualContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DataAtual = ({ data }) => {
  return <DataAtualContainer>{data.toLocaleDateString()}</DataAtualContainer>;
};

export default DataAtual;