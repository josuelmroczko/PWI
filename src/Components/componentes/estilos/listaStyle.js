import styled from 'styled-components';
import colors from '../../cores/cores';

export const ListaProdutosContainer = styled.div`
position: absolute;
  width: 550px;
  height: 500px;
  
  left: 450px;
  border: 1px solid #ccc;
  padding: 10px;
 
  border: none;
  top: 140px;
  overflow: scroll;
li{
  left: 100px;
width: 416px;

}
`;

export const ListaProdutosLista = styled.ul`
 position: absolute;
 display: flex;
 flex-direction: column;
  list-style: none;
  padding: 0;
  left: 0;
  width: 416px;
  top: -100px;
  
  
`;

export const ProdutoItemContainer = styled.li`
position: relative;
  display: flex;
  justify-content: space-between;
  top: 100px;
  left: 110px;
  width: 400px;
  background-color: aliceblue;
  align-items: center;
  margin-bottom: 5px;
  height: 100px;
  border-radius: 10px;
border: 1px solid var(--gray-6, #F2F2F2);
background: ${colors.branco};

 
`;

export const ProdutoImagem = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;

`;

export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const ProdutoNome = styled.span`
  font-weight: bold;
  margin-bottom: 5px;

  
`;

export const ProdutoValorHorario = styled.div`
  display: flex;
  align-items: center;
  
`;

export const ProdutoValor = styled.span`
  margin-right: 10px;
  
`;

export const ProdutoHorario = styled.span`
  font-style: italic;
  
`;

export const ProdutoBotao = styled.button`
  background-color: transparent;
  color: ${colors.azul};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  
`;
export const DataAtualTopo = styled.span`
position: relative;
left: 166px;
border-radius: 20px;
top: -20px;
height: 150px;
width: 474px;

text-align: center;
background-color: ${colors.azulclaro};

h2{
  position: relative;
  top: 30px;
}
span{
  position: absolute;
  top:100px;
  height: 40px;
  width: 416px;
  left: 30px;
  padding-top: 5px;
  background-color: ${colors.laranjaAvermelhado};
  color: var(--white, #FFF);
  text-align: center;

font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
}


`
