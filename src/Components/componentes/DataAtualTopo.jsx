// DataAtualTopo.jsx

import React from 'react';
import HeaderListaProdutos from './CabecaListaProdutos';
import { DataAtualTopo } from './estilos/listaStyle';

const DataAtualTopoComponent = ({ data }) => {
  return (
    <DataAtualTopo>
      <HeaderListaProdutos data={data} />
    </DataAtualTopo>
  );
};

export default DataAtualTopoComponent;