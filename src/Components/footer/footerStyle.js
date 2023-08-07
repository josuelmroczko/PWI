import styled from 'styled-components';
import imgfooter from './imgfooter.jpg'
import colors from '../cores/cores';


export const FooterContainer = styled.footer`
  height: 650px;
  padding-top: 0px;
  background-image: url(${imgfooter});
  width: 1516px;
  background-size: cover;
  overflow: hidden;
 a{
  text-decoration: none;
 }
  P{
    color:${colors.branco} ;

/* Medium/14px */
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px; /* 150% */
  }
  h3{
    color: var(--white, #FFF);
 
font-family: Fredoka;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 31.92px; /* 159.6% */
  }
  .direitos{
    position: relative;
     width: 1516px;
     display: flex;
     justify-content: center;
    text-align: center;
    top: 170px;
    color: ${colors.branco};
 
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 150% */
  }
`;

export const FooterList = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: start;
top: 150px;
  
  
  
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
   
    
  }

  li {
    list-style: none;
    margin-bottom: 5px;
    text-align: start;
    padding-top: 28px;
    text-align: start;
  }
`;