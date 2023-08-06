import React, { useState } from 'react';

import logo from '../imagens/logo-thermas 1.png';
import { StyleMenu } from './style.js';
import Produto from '../produtos/produtos';
import LoginComponent from '../minhaConta/conta';
import PedidoComponent from '../pedidos/Pedido';
import DiscountComponent from '../meiaEstudante/meia';
import Footer from '../footer/footer';

function Menu() {
  const [linkAtivo, setLinkAtivo] = useState('Home');
  const [exibirLogin, setExibirLogin] = useState(false);
  const [exibirDesconto, setExibirDesconto] = useState(false); // Novo estado para controlar o componente de desconto

  const handleLinkClick = (link) => {
    setLinkAtivo(link);
    setExibirLogin(false);
    setExibirDesconto(link === 'Meia estudante'); // Define o estado exibirDesconto como true se o link clicado for 'Meia estudante'
  };

  const handleMinhaContaClick = () => {
    setExibirLogin(!exibirLogin);
  };

  return (
    <StyleMenu>
      <img className="logo_img" src={logo} alt="Logo thermas dos laranjais parque aquatico olimpia-sp" />
      <ul>
        <li>
          <a
            id='link1'
            href=""
            className={linkAtivo === 'Home' ? 'linkAtivo' : ''}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={linkAtivo === 'Minha conta' ? 'linkAtivo' : ''}
            onClick={() => {
              handleLinkClick('Minha conta');
              handleMinhaContaClick();
            }}
          >
            Minha conta
          </a>
        </li>
        <li>
          <a
            href="#"
            className={linkAtivo === 'Meus pedidos' ? 'linkAtivo' : ''}
            onClick={() => handleLinkClick('Meus pedidos')}
          >
            Meus pedidos
          </a>
        </li>

        <li>
          <a
            href="#"
            className={linkAtivo === 'Meia estudante' ? 'linkAtivo' : ''}
            onClick={() => handleLinkClick('Meia estudante')}
          >
            Meia estudante
          </a>
        
        </li>
      </ul>
      <button className="button_duvidas">
        <p className="esclamacao">?</p> Dúvidas
      </button>

      {linkAtivo === 'Home' && <div className='conteudoBotoes'><Produto /></div>}
      {linkAtivo === 'Meus pedidos' && (
        <div className='conteudoBotoes'>
          <PedidoComponent expanded />
        </div>
      )}
      {exibirLogin && <LoginComponent />}

      {exibirDesconto && (
        <div style={{ position: 'absolute', top: '517px', left: '50%', transform: 'translate(-50%, -50%)',zIndex:'99' }}>
          <DiscountComponent />
        </div>
      )}
    </StyleMenu>
  );
}

export default Menu;