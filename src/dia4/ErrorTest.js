import React from 'react'



class ErrorTest extends React.Component {

    state = {cuenta:0}

    contar = () => {
        if(this.state.cuenta === 3){
             throw new Error()
        }
        this.setState({cuenta: this.state.cuenta+1})

    }

    render() {
        return (
                <p>{this.state.cuenta} <input type="submit" onClick={this.contar} /></p>
        )
    }
}

export default ErrorTest