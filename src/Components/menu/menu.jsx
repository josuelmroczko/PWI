import React, { useState } from 'react';

import logo from '../imagens/logo-thermas 1.png';
import { StyleMenu } from './style.js';
import Produto from '../produtos/produtos';
import LoginComponent from '../minhaConta/conta';
import PedidoComponent from '../pedidos/Pedido';

function Menu() {
  const [linkAtivo, setLinkAtivo] = useState('Home');
  const [exibirLogin, setExibirLogin] = useState(false);

  const handleLinkClick = (link) => {
    setLinkAtivo(link);
    setExibirLogin(false);
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
      </ul>
      <button className="button_duvidas">
        <p className="esclamacao">?</p> Dúvidas
      </button>

      {/* Renderizar o conteúdo correspondente ao link clicado */}
      {linkAtivo === 'Home' && <div className='conteudoBotoes'><Produto /></div>}
      {linkAtivo === 'Meus pedidos' && (
        <div className='conteudoBotoes'>
          <PedidoComponent expanded /> {/* Adicione a propriedade 'expanded' para abrir o PedidoComponent */}
        </div>
      )}
      {exibirLogin && <LoginComponent />}
    </StyleMenu>
  );
}

export default Menu;
