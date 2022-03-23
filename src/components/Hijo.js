import React, { Component } from 'react'

export default class Hijo extends Component {

    constructor(props) {
        super(props);
        console.log('Se ejecuta el constructor del hijo');
    }

    componentDidMount() {
        console.log('Se ejecuta el componentDidMount del componente hijo');
    }


    render() {
        console.log('Se ejecuta el render del hijo');

        return (
            <>
                <p>Componente hijo</p>
                <p>{this.props.mensaje}</p>
                <button onClick={() => this.props.handleCantidad(1)}>+</button>
                <button onClick={() => this.props.handleCantidad(-1)}>-</button>
            </>
        )
    }
}
