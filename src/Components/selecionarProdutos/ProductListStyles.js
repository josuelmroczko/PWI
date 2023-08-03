import styled from 'styled-components';
import colors from '../cores/cores';
export const ProductListWrapper = styled.div`
  position: absolute;
  padding: 50px;
  border: none;
  margin: 10px;
  width: 450px;
  height: 550px;
  bottom: 30px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  
  img {
    position: relative;
    width: 100px;
    top: 14px;
    right: 9px;
  }
.dataDaCompra{
  position: relative;
  background-color: aqua;
  text-align: center;
  width: 1000px;
  right: 100px;
}
  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price-container {
    position: relative;
    top: 30px;
    display: flex;
    align-items: center;
  }

  p {
    position: relative;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 10px;
    top: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }

  li {
    position: relative;
    left: 10px;
    display: flex;
    background-color: aliceblue;
    height: 99px;
    width: 415px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding: 10px;
  }

  button {
    background-color: transparent;
    color: ${colors.azul};
    border: none;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      color: ${colors.laranjaAvermelhado};
    }
  }
`;