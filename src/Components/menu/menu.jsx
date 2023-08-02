import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../imagens/logo-thermas 1.png';
import { StyleMenu } from './style.js';

function Menu() {
  const [linkAtivo, setLinkAtivo] = useState('Home');

  const handleLinkClick = (link) => {
    setLinkAtivo(link);
  };

  return (
    <StyleMenu>
      <img className="logo_img" src={logo} alt="Logo thermas dos laranjais parque aquatico olimpia-sp" />
      <ul>
        <li>
          <a id='link1' href="#" className={linkAtivo === 'Home '  ? 'linkAtivo' : ''}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={linkAtivo === 'Minha conta' ? 'linkAtivo' : ''}
            onClick={() => handleLinkClick('Minha conta')}
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
      {linkAtivo === 'Home' && <div className='conteudoBotoes' >Conteúdo da página Home</div>}
      {linkAtivo === 'Minha conta' && <div className='conteudoBotoes' >Conteúdo da página Minha conta</div>}
      {linkAtivo === 'Meus pedidos' && <div className='conteudoBotoes' >Conteúdo da página Meus pedidos</div>}
    </StyleMenu>
  );
}

export default Menu;