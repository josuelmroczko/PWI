import React from 'react';
import { FooterContainer, FooterList } from './footerStyle';
 import logoThermas from './logo-thermas 1.png'
 import location from  '../footer/imagens/location_on.svg'

import americaLogo from  '../footer/imagens/American logo.svg'
import captive from  '../footer/imagens/captive_portal.svg'
import call from  '../footer/imagens/call.svg'
import elo from  '../footer/imagens/elo logo.svg'
import facebook from  '../footer/imagens/facebook-f.svg'
import hipercard from  '../footer/imagens/Hipercard_logo logo.svg'
import insta from  '../footer/imagens/instagram.svg'
import mail from  '../footer/imagens/mail.svg'
import mastercard from  '../footer/imagens/MasterCard logo.svg'
import pixlogo from  '../footer/imagens/pix logo.svg'
import twitter from  '../footer/imagens/twitter.svg'
import visa from  '../footer/imagens/visa logo.svg'
import youtube from  '../footer/imagens/youtube.svg'


const Footer = () => {
  return (
    <FooterContainer>
      <a href="#">
        <div style={{ display: 'flex' }}>
          <FooterContainer>
            <div style={{ display: 'flex' }}>
              <FooterList>
                <ul>
                  <li><img src={logoThermas} alt="Logo Thermas"></img></li>
                  <li><p><img src={location} alt="Localização"/>Av. do folclore, 1543 - Jardim Santa <br/> Efigênia, Olímpia - SP, 15405-014</p></li>
                  <li><p><img src={call} alt="Telefone"/> 17 3279 - 3500</p></li>
                  <li><p><img src={mail} alt="E-mail"/> termas@termas.com.br</p></li>
                  <li><p><img src={captive} alt="Site"/> www.thermas.com.br</p></li>
                </ul>
              </FooterList>
              <FooterList>
                <ul>
                  <li><h3>Redes Sociais</h3></li>
                  <li><p><img src={twitter} alt="Twitter"/> Twitter</p></li>
                  <li><p><img src={facebook} alt="Facebook"/> Facebook</p></li>
                  <li><p><img src={insta} alt="Instagram"/> Instagram</p></li>
                  <li><p><img src={youtube} alt="YouTube"/> Youtube</p></li>
                </ul>
              </FooterList>
              <FooterList>
                <ul>
                  <li><h3>Institucional</h3></li>
                  <li><p>Política de compra no cartão</p></li>
                  <li><p>Política de cancelamento</p></li>
                  <li><p>Política de compra</p></li>
                  <li><p>Dúvidas</p></li>
                </ul>
              </FooterList>
              <FooterList>
                <ul>
                  <li><h3>Formas de pagamento</h3></li>
                  <li>
                    <p>
                      <img src={mastercard} alt="MasterCard"/> 
                      <img src={visa} alt="Visa"/> 
                      <img src={elo} alt="Elo"/> 
                      <img src={americaLogo} alt="American Express"/>  
                      <img src={hipercard} alt="Hipercard"/>  
                    </p>
                  </li>
                  <li><p>em até 3 vezes nos cartões de crédito.</p></li>
                  <li><p><img src={pixlogo} alt="Pix"/> </p></li>
                </ul>
              </FooterList>
            </div>
          </FooterContainer>
        </div>
      </a>
      <p className='direitos'>
        Este site é protegido pelo reCAPTCHA e a Política de Privacidade e os Termos de Serviço do Google se aplicam.<br/>
        Todos os direitos reservados. Desenvolvido por PWI
      </p>
    </FooterContainer>
  );
};

export default Footer;