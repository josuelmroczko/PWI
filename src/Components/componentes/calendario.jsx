import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarioContainer, FundoContainer } from './estilos/calendariosStyle';

const Calendario = ({ selectedDate, handleDateChange }) => {
  return (
    <>  <FundoContainer></FundoContainer>
      <CalendarioContainer>   
        

        <h2>Escolha a data de utilização</h2>
        <div className="calendar-wrapper">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            calendarType="US"
            tileClassName={({ activeStartDate, date, view }) => {
              if (view === 'month') {
                // Adicionar a classe 'circle' aos números dos dias
                return date.getDate() === selectedDate.getDate() ? 'circle' : '';
              }
              return '';
            }}
          />
        </div>
      </CalendarioContainer>
    </>
  );
};

export default Calendario;
