import React from 'react';
import CardNota from '../CardNota/CardNota';
import './estilo.css';

export default function ListaDeNotas() {
  return (

    <ul className="lista-notas">
      {Array.of('Trabalho', 'Trabalho', 'Estudos').map(() => (
        <li className="lista-notas_item">
          <CardNota />
        </li>
      ))}
    </ul>
  );
}
