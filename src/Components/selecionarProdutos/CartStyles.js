import styled from 'styled-components';

export const CartWrapper = styled.div`

position: absolute;
left: 500px;


 

  h2 {
    position: absolute;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: #a71d2a;
    }
  }
`;

export const LiCart = styled.li`
  margin-top: 500px;
  /* Outros estilos que você desejar adicionar */
`;
