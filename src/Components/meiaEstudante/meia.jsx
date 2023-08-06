import React, { useState } from 'react';
import styled from 'styled-components';
import clubeMeia from './clube-das-criancas-skzoy 1.png'

const StyledDiscountContainer = styled.div`
position: absolute;
  display: flex;
right: 157px;
top: 491px;
  background-color: aliceblue;
  width: 1516px;
  margin: 0 auto;
  z-index: 88;

  img {
    width: 871px;
    height: 871px;
  }

  h1 {
    color: var(--orange-500, #F76707);
    leading-trim: both;
    font-family: Fredoka;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 47.88px; /* 133% */
  }

  p {
    /* Estilos para os parágrafos */
  }

  /* Outros estilos necessários para o restante dos elementos dentro do componente */
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: 908px;
  left: 915px;
`;

const DiscountComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const [time, setTime] = useState('15:30pm');
  const [isChecked, setIsChecked] = useState(false);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const meia = styled.div`
  position: absolute;
  `

  return ( 

  

    <AbsoluteContainer>
      <StyledDiscountContainer>
        <img src={clubeMeia} alt="imagem de piscinas " />
        <div>
          <h1>Ingresso diário - Meia Segunda a Sexta - Estudante Abril 2023</h1>
          <p>11 de Abril 2023</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Porta auctor sagittis morbi bibendum quam elementum aliquam
            elementum. Egestas nibh lacus pellentesque odio ornare natoque non tincidunt.
          </p>
          <div>
            <button>Zero</button>
            <input type="number" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} />
            <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          </div>
          <input type="text" value={time} onChange={handleTimeChange} />
          <p>Atenção! Para este produto é preciso aceitar os termos de aquisição de ingressos.</p>
          <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            Concordo com os termos e condições referentes a este ingresso.
          </label>
          <button>Adicionar</button>
        </div>
      </StyledDiscountContainer>
    </AbsoluteContainer>


 
  );
};

export default DiscountComponent;