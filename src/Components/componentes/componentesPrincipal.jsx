import React, { useState } from 'react';
import { styled } from 'styled-components';

import Calendario from './calendario';
import ListaProdutos from './protutosItem';
import Carrinho from './carrinho';
import DataAtual from './dataAtual';


const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  position: relative;
  ::-webkit-scrollbar {
  display: none;
}
  
`;

const PositionedContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 10;
  display: flex;
  
  
`;


const CalendarioCarrinho = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [carrinho, setCarrinho] = useState([]);
  const produtos = [
    { id: 1, nome: 'Ingresso Diário Inteiro 2023', valor: 13 },
    { id: 2, nome: 'Ingresso Diário Inteiro 2023', valor: 23},
    { id: 2, nome: 'Ingresso Diário Inteiro 2023', valor: 123 },
    { id: 2, nome: 'Ingresso Diário Inteiro 2023', valor: 12 },
    { id: 2, nome: 'Ingresso Diário Inteiro 2023', valor: 23 },
    { id: 2, nome: 'Ingresso Diário Inteiro 2023', valor: 45 },
    // Adicione mais produtos conforme necessário
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAdicionarCarrinho = (produto) => {
    const produtoComData = { ...produto, data: selectedDate };
    setCarrinho([...carrinho, produtoComData]);
  };

  const handleRemoverItem = (item) => {
    setCarrinho(carrinho.filter((produto) => produto.id !== item.id));
  };

  const handleAdicionarUm = (item) => {
    const updatedCarrinho = carrinho.map((produto) =>
      produto.id === item.id && produto.valor > 0 ? { ...produto, valor: produto.valor + item.valor } : produto
    );

    // Remove produtos com valor zero do carrinho
    const filteredCarrinho = updatedCarrinho.filter((produto) => produto.valor > 0);

    setCarrinho(filteredCarrinho);
  };

  const handleRemoverUm = (item) => {
    const updatedCarrinho = carrinho.map((produto) =>
      produto.id === item.id && produto.valor > 0 ? { ...produto, valor: produto.valor - item.valor } : produto
    );

    // Remove produtos com valor zero do carrinho
    const filteredCarrinho = updatedCarrinho.filter((produto) => produto.valor > 0);

    setCarrinho(filteredCarrinho);
  };

  return (
    <div className="App">
      <Container>
        <PositionedContainer>
          <Calendario selectedDate={selectedDate} handleDateChange={handleDateChange} />
          <ListaProdutos produtos={produtos} handleAdicionarCarrinho={handleAdicionarCarrinho} />
        </PositionedContainer>
        <Carrinho
          carrinho={carrinho}
          handleRemoverItem={handleRemoverItem}
          handleAdicionarUm={handleAdicionarUm}
          handleRemoverUm={handleRemoverUm}
        />
      </Container>
      <DataAtual data={selectedDate} />
    </div>
  );
};

export default CalendarioCarrinho;
 
 


 
