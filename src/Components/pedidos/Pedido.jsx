import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../cores/cores';
import ticket from './ticket.svg'

const PedidoComponentWrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: -80px;
  padding: 20px;
  left: 0;
  height: 550px;
  width: 1516px;
  background-color: ${colors.brancoFumaca};
  border: 1px solid #ccc;

  display: flex;
  flex-direction: column;

  h2 {
    color: var(--blue-500, #002E6A);
    margin: 0;
    font-family: Fredoka;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 31.92px;
  }

  .pedido-info {
    display: flex;
    padding: 19px 22px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 10px 10px 0px 0px;
    color: var(--white, #FFF);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    background: var(--blue-500, #002E6A);
  }

  .content {
    position: relative;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    background-color:transparent;
  }

  button {
    background-color:${colors.branco};
    width: 100%;
    padding: 8px 16px;
   border-bottom: 2px solid ${colors.cinzaClaro};
    border-radius: 4px;
    cursor: pointer;
    color: var(--blue-500, #002E6A);
    text-align: right;

    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    &:hover {
      background-color: #0056b3;
    }

    display: flex;
    align-items: center;
  }

  .button-text {
    margin-left: auto;
  }

  .pedido-content {
    display: ${props => (props.expanded ? 'block' : 'none')};
    /* Exibe ou esconde o conteúdo do pedido */
    margin-top: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;


    li {
      margin-bottom: 5px;
    }
  }

  /* Adicione a altura máxima para controlar o scroll */
  .scrollable-content {
    position: relative;
    top: -65px;
    max-height: 200px;
    background-color: ${colors.branco};
    height: 90px;
    display: flex;
   
    
    img{
      position: relative;
      bottom: 0px;
      width: 90px;
      left: 20px;
    }
  }

  .ticket {
    position: relative;
    display: flex;
    flex-direction: column;
    bottom: 0px;
    width: 200px;
    left: 20px;
    p{
      color: var(--laranja-600, #FF6022);

/* Medium/16px */
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
    }
    span{
      color: var(--cinza-500, #888);
 
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
    }
    i{
       color: red;
    }
    ul {
      position: relative;
  
      display: flex;
      width: 500px;
    }
    li {
      display: flex;
      flex-direction: column;
    }

  }

  img {
    border: 1px solid ${colors.cinzaClaro};
    border-radius: 100%;
    margin-right: 10px;
  }

  .ul2{
    position: relative;
    width: 800px;
    bottom:0px;
    left: 350px;
    display: flxex;
    color: ${colors.cinzaClaro};
    justify-content: space-between;
  }
  .li2 span{
     color: ${colors.azul};
  }


`;

const PedidoComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <PedidoComponentWrapper expanded={expanded}>
      <h2 className='textodeexpandir'>Meia-Entrada Infantil</h2>
      <h2>Meus pedidos</h2>
      <div className="pedido-info">
        <p> Pedido número 2539</p>
        <p>Realizado em abril de 2023</p>
      </div>

      <div className="content">
      <button onClick={toggleExpand} style={{ display: 'flex', justifyContent: 'space-between' }}>
  <span className="button-text" style={{ marginRight: '590px' }}>Meia-Entrada Infantil</span>
  <span className="button-text" style={{ marginLeft: '590px' }}>Expandir</span>
</button>


        <div className="pedido-content">
          <div className="scrollable-content">
       
             
                <img src={ticket} alt="Ticket" />
             <ul className='ticket'>
               <li>  <p>Meia entrada infantil</p></li> 
                <li>  <span>Data visita <i>03/08/2022</i></span> </li>
           
            </ul>
            <ul className='ul2'>
              <li className='li2'>Quantidade <span>2</span></li>
              <li className='li2'>Valor Unitário <span>R$5,00</span></li>
              <li className='li2'>Valor Unitário <span>R$5,00</span></li>
            </ul>
          </div>
        </div>
       
      </div>
    
    </PedidoComponentWrapper>
  );
};
export default PedidoComponent;
