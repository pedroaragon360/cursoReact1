import React from 'react';

class BotonFetch extends React.Component {

    state = {content:''}

    cargarContent = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(a => {
            this.setState({content: JSON.stringify(a)})
        })
    }

    render (){
        return (
            <>
            <button onClick={this.cargarContent}>Boom</button>
            {this.state.content}
            </>
        )

    }


}

export default BotonFetch