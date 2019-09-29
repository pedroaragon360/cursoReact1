import React from 'react'

const InputColor = (props) => 
    <input type="color" onChange={props.onChange} value={props.value}/>

class LevantarEstado extends React.Component {
    state = {
        color:'#ffffff'
    }
    changeColor = (e) => 
        this.setState({color:e.target.value})
    

    render(){
        return (
            <>
            <div style={{color: this.state.color}}>Texto</div>
            <InputColor onChange={this.changeColor} value={this.state.color}/>
            </>
        )
    }

}


export default LevantarEstado;