import React from 'react';

const Lots = (props) => {
  if(props.mostrar>2)
    return <p>{props.children}</p>
    else
    return ''
}

const Personas = (props) => {

  return props.nombres.slice(0,props.contador).map((nombre,i) => 
    <p key={i}>{nombre}</p>
  )
}

class Button extends React.Component {
  state = {user:'pedro',personas: ['pedro','marta'],count:0}

  //  increment(){
  //   return this.setState({ count: this.state.count + 1 });
  // }

  decrement = state => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
    <>
    <h1 name={this.props.name} onClick={this.decrement}>Hello, {this.props.name} {this.state.count} <Lots mostrar={this.state.personas.length}>Hay muchos</Lots></h1>
    <Personas contador={this.state.count} nombres={this.state.personas}/>
    </>)
  }
}


const Header = () => {
  return <Button name="Pedro"></Button>
}

export default Header;
