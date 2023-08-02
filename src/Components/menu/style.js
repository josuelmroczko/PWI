import styled from 'styled-components';
import colors from '../cores/cores';


export const StyleMenu = styled.div`
  display: flex;
  width: 1512px;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  right: 20px;


  .logo_img {
    width: 180px;
    height: 54.706px;
    flex-shrink: 0;
    padding-left: 20px;
  }
  .esclamacao{

  border: 2px solid ;
  border-radius: 100%;
  align-items: center;
  width: 18px;
  height: 18px;
}

  .button_duvidas{
    position: relative;
    right: 20px;
    display: flex;
    justify-content: space-around;
    height: 45px;
    width: 127px;
   
    font-family: Fredoka;
    font-weight: 600;
    padding-right: 25px;
    padding: 0px 20px 0px 15px; 
    border-radius: 100px;
    border: 1px solid ${colors.laranjaAvermelhado};
    align-items: center;
    font-size: 16px;
    background: ${colors.branco};
    color:${colors.laranja}
    
    
  }
  .button_duvidas:hover {
    background-color: ${colors.laranja};
    color: ${colors.branco};
  }


  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;

    li {
      margin-right: 10px;

      a {
        color: ${colors.azul};
        font-family: Fredoka;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 31.92px; 
        text-decoration: none;
        &:hover {
          color: ${colors.laranjaAvermelhado};
          .link1{
    color: ${colors.laranjaAvermelhado};
   }
        }
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    color: red;
    text-decoration: none;
  }
  #link1{
    color: ${colors.laranjaAvermelhado};
  }
 
  .conteudoBotoes {
   position: absolute;
   text-align: center;
   top: 500px;
   width: 1512px
   
 
  }
`;