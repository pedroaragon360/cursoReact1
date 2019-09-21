import React from 'react';

class EventoCambio extends React.Component {

    state = {content:''}

    renderizar = (e) => {
        this.setState({content: e.target.value});
    }

    render (){
        return (
            <>
            <input onChange={this.renderizar}></input>
            <select onChange={(e) => this.setState({content: e.target.value})}>
                <option>Hola</option>
                <option>mundo</option>
            </select>
            <div>{this.state.content}</div>
            </>
        )

    }


}

export default EventoCambio