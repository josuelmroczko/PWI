import styled from 'styled-components';
import colors from '../../cores/cores';

export const CalendarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .calendar-wrapper {
    

  }
  .react-calendar {
    position: relative;
    top: 100px;
    left: 25%;
    border: none;
    background-color: transparent;
  }
  h2 {
    position: relative;
    color: antiquewhite;
    left: 90px;
    top: 10px;
  }
  .react-calendar__tile {
    background-color: ${colors.azulclaro};
    border-radius: 100%;
    display: flex;
    padding: 0px;
    justify-content: center;
    align-items: center;
    width: 30px;
  
    
  }

  .react-calendar__tile--active {
    background-color: #007bff;
    color: white;

   
  } .react-calendar__month-view__days__day {
    width: 5px;
  }

.react-calendar__month-view__days{
  max-width: 400px;
  height: 250px;
}

.react-calendar {
    position: relative;
    top: 50px;
    left: 25%;
    border: none;
    background-color: transparent;
  }

  .react-calendar__navigation__label__labelText{
    color: ${colors.azul};



font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px; /* 150% */
  }
`;

export const CalendarioWrapper = styled.div`
  margin-bottom: 20px;
  
`;

export const ListaProdutosWrapper = styled.div`
  width: 200px;
`;

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProdutoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    flex: 1;
  }

  button {
    margin-left: 10px;
  }
`;

export const FundoContainer = styled.div`

    position: absolute;
    background-color: aliceblue;
    left: 65px;
    top: 80px;
    width: 414px;
    height: 355px;
    border-radius: 10px;




`;
