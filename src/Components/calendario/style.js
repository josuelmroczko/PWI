/* style.js */
import styled from 'styled-components';
import colors from '../cores/cores';

const CalendarioWrapper = styled.div`
  /* Estilos para o título */
  h2 {
    position: relative;
    top: 20px;
    text-align: center;
    font-family: 'Fredoka', sans-serif;
    font-size: 20px;
    font-weight: 600;

    /* Estilos para o círculo no título */
    & p {
      position: relative;
      left: 70px;
      top: 26px;
      background-color: ${colors.laranjaAvermelhado};
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
  }

  /* Estilos para a lista de dias da semana */
  .semana {
    position: relative;
    top: 100px;
    left: 18%;
    width: 315px;
    background-color: aliceblue;
    display: flex;
    justify-content: space-evenly;

    li {
      z-index: 55;
      color: var(--blue-500, #002E6A);
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px; /* 150% */
      text-transform: uppercase;
    }
  }

  /* Estilos para o calendário personalizado */
  .react-datepicker {
    position: relative;
    top: 90px;
    height: 302px;
    left: 30px;
    font-family: Arial, sans-serif;
  }

  .react-datepicker__day {
    display: inline-block;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    border-radius: 100%;
    background-color: ${colors.azulclaro};
    color: ${colors.branco};
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    height: 30px;
    width: 30px;
    margin: 8px; /* Ajuste o valor conforme necessário */
    overflow: hidden;
  }

  .react-datepicker__header {
    border: none;
    position: relative;
    background-color: white;
    height: 63px;
    padding-top: 20px;
    padding-bottom: 15px;
  }

  .react-datepicker__navigation {
    position: absolute;
    top: -45px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 2em; /* ou ajuste o valor conforme necessário */
    text-align: center;
  }

  .react-datepicker__week {
    height: 58px;
  }

  .react-datepicker__day-names {
    display: none;
  }

  .react-datepicker__month-container {
    position: relative;
    bottom: 60px;
    width: 415px;
    height: 302px;
    border-radius: 10px;
    overflow: hidden;
  }

  .react-datepicker__day--weekend {
    background-color: ${colors.azul};
    color: ${colors.branco};
    border-radius: 100%;
  }

  .react-datepicker__day--selected {
    background-color: ${colors.azul};
    color: white;
    border-radius: 100%;
  }

  .react-datepicker__day--name {
    background-color: ${colors.azulclaro};
    border-radius: 100%;
  }

  .selected {
    background-color: green !important;
    color: ${colors.branco};
  }

  /* Estilos para a lista com "L" */
  .opcoesCalendario {
    position: absolute;
    width: 415px;
    display: flex;
    top: 0;
    right: 5%;
    flex-wrap: wrap;

    li {
      text-align: start;
      width: 80px;
    }
  }

  /* Estilos para o contêiner da lista */
  .lista-container {
    width: 415px;
    height: 258px;
    top: 150px;
    left: 50px;
    position: relative;
    display: flex;
    justify-content: space-between;

    li {
      justify-content: space-around;
    }
  }

  .opcoesCalendario li {
    position: relative;
    width: 128px;
    height: auto;
    left: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: white;
  }

  .opcoesCalendario p {
    position: relative;
    left: 20px;
  }

  /* Estilos para o círculo com "L" */
  .circulo {
    display: inline-block;
    position: relative;
    align-items: center;
    right: 10px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: aliceblue;
    color: red;
    text-align: center;
    line-height: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    top: 20px;
  }

  .opcoesCalendario2 {
    position: relative;
    top: -30px;
    color: ${colors.branco};
    width: 100%;
    display: flex;
  }

  .opcoesCalendario2 p {
    position: relative;
    padding-left: 20px;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  .circulo2 {
    display: inline-block;
    position: relative;
    align-items: center;
    left: 15px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: aliceblue;
    color: red;
    text-align: center;
    line-height: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    top: 0px;
  }

  .opcoesCalendario2 li {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    right: 45px;
  }
`;

export default CalendarioWrapper;