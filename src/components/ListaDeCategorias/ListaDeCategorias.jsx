import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as LogoBrancaSVG} from '../../assets/img/x.svg'

class ListaDeCategorias extends Component {

  constructor() {
    super();
    this.valorCategoria = ''
    this.state = { categorias: [] }
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }

  _handleSubmitButton() {
    if (!this.valorCategoria) {
      alert('Você não pode criar uma categoria vazia')
      return;
    }
    this.props.adicionarCategoria(this.valorCategoria)
    
  }

  _handleGetInputChanges(e) {
    this.valorCategoria = e.target.value;
    return this.valorCategoria
  }

  _handleEventoInput(e) {

    if (e.key === "Enter") {

      if (!this.valorCategoria) {
        alert('Você não pode criar uma categoria vazia')
        return;
      }
      this.props.adicionarCategoria(this.valorCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
                <LogoBrancaSVG className="lista-categorias_icone"/>
              </li>
            );
          })}
        </ul>

        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
          onChange={this._handleGetInputChanges.bind(this)}
        />

        <button
          className="form_submit"
          onClick={this._handleSubmitButton.bind(this)}
          type="button">Adicionar
        </button>

      </section>
    );
  }
}

export default ListaDeCategorias;
