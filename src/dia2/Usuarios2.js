import React from 'react';


class UserItem extends React.Component {
    state = {usuario: this.props.padres}

    componentDidMount(){
        this.setState({ usuario : [...this.state.usuario , "nuevo"] })
    }

    componentWillUnmount(){
        console.log("Componente destruido")
    }

    render (){
        return (
              <>
               {JSON.stringify(this.state.usuario)} 
            </>)
    }
}


class Usuarios extends React.Component {

    state = {show:true, padres: ["pepito","grillo"]}
    
    render (){
        return (<>
        {this.state.show ? <UserItem padres={this.state.padres}/> : '' }
            <button onClick={() => this.setState({show: !this.state.show})}>Mostrar / Ocultar</button>
            </>)
    }
}


export default Usuarios;