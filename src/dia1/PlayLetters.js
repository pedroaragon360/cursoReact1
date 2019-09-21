import React from 'react';
import Boton from './Boton';
import Title from './Title';


class Welcome extends React.Component {

    state = {
        str:"",
        char:'p'
    }

    increment = () => {
            this.setState(state =>({
                str: state.str + state.char
            }))
    }
    decrease = () => {
            if(this.state.str.length > 0){
            this.setState(state =>({
                str: state.str.slice(0,-1)
            }))
        }
    }
    // IMPORTANTE CREAR VARIABLE CON FUNCIONES FUERA, SI CREAMOS FUNCIONES DENTRO DE JSX
    render(){
        return (
        <>
        <Title>Hello, this: {this.state.str}</Title>
        <Boton accion={this.increment}>Increment</Boton>
        <Boton accion={this.decrease}>Decrease</Boton>
        </>
        )
    }
}

export default Welcome;