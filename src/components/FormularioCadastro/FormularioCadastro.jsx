import React, { Component } from 'react';
import './estilo.css';

export default class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = '';
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
  }

  render() {
    return (

      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button type="submit" className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
