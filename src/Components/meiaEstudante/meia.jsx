import React, { useState } from 'react';
import styled from 'styled-components';
import clubeMeia from './clube-das-criancas-skzoy 1.png'
import calendar from './calendar_month.svg'
import carrinho from './shopping_cart.svg'
import carrinhoadd from './add_shopping_cart.svg'

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
    width: 771px;
    height: 671px;
  }

  h1 {
    position: relative;
    width: 394px;

    color: var(--orange-500, #F76707);
    leading-trim: both;
    font-family: Fredoka;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 47.88px; /* 133% */
  }
  span{

    position: relative;
    top: 15px;
    color: #000068;
  }
  p {
  width: 433px;
  color: var(--gray-700, #666);
 

 
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px; 
  }
  .ingresso{
 position: relative;
 top: 50px;
    height: 73px;
 left: 100px;

  }
  .calendario{
    position: relative;
    top: 5px;
    width: 24px;
    height: 24px;
  }
  .texto{
    position: relative;
    top: 50px;
  }
  .botoes{
    position: relative;
    top: 150px;

  }
  .carrinho{
    width: 20px;
    height: 20px;
  }
  button{
    border-radius: 5px;

    padding: 5px;
    border: none;
    color: white;
    background-color: #F76707;
  }
 .carrinhoQuantidade{
  position: relative;
  bottom: 50px;
 }
 input{
  position: relative;
  width: 450px;
  border-radius: 6px;
  left: 0px;
  border: 1px solid var(--gray-400, #DBDADA);
background: var(--white, #FFF);
 }
 .inputCarrinho{
  position: relative;
  left: -42px;
 }
 .botaoadicionar{
  position: relative;
  top: 50px;
  left: -475px;
  border-radius: 5px;
 }
 .carrinhoadd{
  padding-top: 5px;
  width: 20px;
  height: 20px;
 }
 .termos{
  color: #F76707;
 }
 .checkbox{
  position: relative;
  right: 40px;
  color: var(--gray-700, #666);
 width: 10px;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 150% */
 }
 .botaosomar{
  position: relative;
  right: 80px;
  height: 20px;
  color:orange ;
  background-color: transparent;
  border-radius: 100%;
 }
 .botaodiminuir{
  position: relative;
  right: 80px;
   height: 20px;
 
  color:orange ;
  background-color: transparent;
  border-radius: 100%;
 }
 .checkconcordo{
  position: relative;
  width: 80px;
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

  
<>
    <AbsoluteContainer>
      <StyledDiscountContainer>
        <img src={clubeMeia} alt="imagem de piscinas " />
        <div className='ingresso'>
          <h1>Ingresso diário - Meia Segunda a Sexta - Estudante Abril 2023</h1>
          <span> <img className='calendario' src={calendar} alt="" /> 11 de Abril 2023</span>
          <p className='texto'>
            Lorem ipsum dolor sit amet consectetur. Porta auctor sagittis morbi bibendum quam elementum aliquam
            elementum. Egestas nibh lacus pellentesque odio ornare natoque non tincidunt.
          </p>
          <div className='botoes'>
          <div>


            <button className='carrinhoQuantidade'> <img className='carrinho' src={carrinho} alt="" /> 0</button>
            <input className='inputCarrinho' type="number" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} />
            <button className='botaosomar' onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            <button className='botaodiminuir' onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          </div>
          <input type="text" value={time} onChange={handleTimeChange} />
          <p className='termos'>  Atenção! Para este produto é preciso aceitar os termos de aquisição de ingressos.</p>
          <label className='checkbox'>
            <input className='checkconcordo'type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            Concordo com os termos e condições referentes a este ingresso.
          </label>
          <button className='botaoadicionar'> <img className='carrinhoadd' src={carrinhoadd} alt="" /> Adicionar</button>
          
 
      </div>

        </div>
      </StyledDiscountContainer>
    
     </AbsoluteContainer>



 </>
  );
};

export default DiscountComponent;