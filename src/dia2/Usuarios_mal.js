import React from 'react';


class UserItem extends React.Component {

    render (){
        return (
              <>
               {JSON.stringify(this.props.usuario)} 
            </>)
    }
}


class Usuarios extends React.Component {

    state = {usuario: ["pedro","juan"]}
    
    componentDidMount(){
        this.setState({ usuario : [...this.state.usuario , "nuevo"] })
    }
    componentWillUnmount(){
        console.log("Componente destruido")
    }

    render (){
        return (<>
            <input input type="button" value="boom" />
            <UserItem usuarios={this.state.usuario}/>
            </>)
    }
}


export default Usuarios;