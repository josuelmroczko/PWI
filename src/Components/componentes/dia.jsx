import React from 'react';
import { DiaContainer, DiaNumero, DiaNumeroWrapper } from './styles';

const Dia = ({ dia, mesAtual, diaSelecionado, handleSelecionarDia }) => {
  const isMesAtual = dia.getMonth() === mesAtual.getMonth();
  const isSelected = dia.toDateString() === diaSelecionado.toDateString();
  const diaDaSemana = dia.getDay(); // Obtém o dia da semana (0 a 6, sendo 0 domingo e 6 sábado)

  const handleDiaClick = () => {
    if (isMesAtual) {
      handleSelecionarDia(dia);
    }
  };

  return (
    <DiaContainer isMesAtual={isMesAtual} isSelected={isSelected} onClick={handleDiaClick}>
      <DiaNumeroWrapper>
        <DiaNumero isMesAtual={isMesAtual} isSelected={isSelected} diaDaSemana={diaDaSemana}>
          {dia.getDate()}
        </DiaNumero>
      </DiaNumeroWrapper>
    </DiaContainer>
  );
};

export default Dia;