import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isWeekend, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import CalendarioWrapper from './style.js'; // Importe o componente estilizado
import ptBR from 'date-fns/locale/pt-BR';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const isSelected = (date) => {
    return isSameDay(selectedDate, date);
  };

  const highlightWeekends = (date) => {
    return isWeekend(date) ? 'red' : 'purple';
  };

  const isFirstOrLastColumn = (date) => {
    const startOfMonthDate = startOfMonth(date);
    const endOfMonthDate = endOfMonth(date);
    const startOfWeekDate = startOfWeek(date);
    const endOfWeekDate = endOfWeek(date);

    return isSameDay(date, startOfWeekDate) || isSameDay(date, endOfWeekDate) ||
           isSameDay(date, startOfMonthDate) || isSameDay(date, endOfMonthDate);
  };

  const customDayClassNames = (date) => {
    return `${highlightWeekends(date)} ${isSelected(date) ? 'selected' : ''} ${
      isFirstOrLastColumn(date) ? 'red' : ''
    }`;
  };

  // Função para extrair as três primeiras letras do dia da semana
  const getShortDayName = (date) => {
    return ptBR.localize.day(date.getDay()).substring(0, 3);
  };

  return (
    <CalendarioWrapper>
      <h2> <p>1</p>Escolha a data de utilização</h2>
      <ul className='semana'>
        {/* Utilize a função getShortDayName para exibir as três primeiras letras */}
        <li>{getShortDayName(new Date())}</li>
        <li>{getShortDayName(new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000))}</li>
        <li>{getShortDayName(new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000))}</li>
        <li>{getShortDayName(new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000))}</li>
        <li>{getShortDayName(new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000))}</li>
        <li>{getShortDayName(new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000))}</li>
        <li>{getShortDayName(new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000))}</li>
      </ul>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateClick}
        dateFormat='dd/MM/yyyy'
        dayClassName={customDayClassNames}
        inline
        showMonthDropdown={false}
        showYearDropdown={false}
        dropdownMode='select'
        weekDayNames={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']}
        weekDayShortNames={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
        locale='pt-BR'
        dayNameLength={1}
      />
<div class="lista-container">
  <ul class='opcoesCalendario'>
    <li><span class="circulo">L</span><p>Finais de <br/>semana</p></li>
    <li><span class="circulo">L</span><p>Feriados e dias <br/> especiais</p></li>
    <li><span class="circulo">L</span><p>Dias de semana <br/><br/></p></li>
  </ul>

    <ul class='opcoesCalendario2'>
      <li><span class="circulo2">L</span><p>Data selecionada para <br/> comprar</p></li>
      <li><span class="circulo2">L</span><p>Vendas encerradas <br/>ou agenda fechada para <br/>venda</p></li>
    </ul>


</div>
    </CalendarioWrapper>
  );
};

export default Calendario;
