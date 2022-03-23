import React, { Component } from 'react'
import Hijo from './Hijo';

export default class Padre extends Component {

  constructor(props) {
    super(props);
    console.log('Se ejecuta el constructor del componente padre');
    this.state = {
      mensaje: 'Bienvenidos!',
      usuario: 'Pilar',
      cantidad: 0
    }
  }

  componentDidMount() { // Se ejecuta tras renderirse por primera vez el componente en el DOM
    console.log('Se ejecuta el componentDidMount del componente padre');
    setTimeout(() => {
      this.setState({mensaje: '¿qué tal?'}); // Tras actualizar el estado => render()
    }, 3000)
    setTimeout(() => {
      this.setState({usuario: 'Carlos'});
    }, 5000)
  }

  componentDidUpdate() { // Se ejecuta cada vez que haya cambios en el componente
    console.log('Se ejecuta el componentDidUpdate del componente padre');
  }

  componentWillUnmount() { // Se ejecutaría cuando se destruya el componente
    // Labores de "limpieza"
  }

  handleCantidad = (cantidad) => {
    this.setState(prevState => {
      return {cantidad: prevState.cantidad += cantidad};
    })
  }

  render() { // Se ejecuta al inicio y cada vez que haya cambios en el componente
    console.log('Se ejecuta el render del componente padre')
    return (
      <>
        <h1>Componente padre</h1>
        <p>Cantidad {this.state.cantidad}</p>
        <Hijo mensaje={this.state.mensaje} handleCantidad={this.handleCantidad}/>
      </>
    )
  }
}
