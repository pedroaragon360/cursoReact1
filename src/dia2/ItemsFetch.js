import React from 'react'

class ItemsFetch extends React.Component {

    constructor(props) {
        super(props);
        this.state = { json: '' };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(a=>{ 
            this.setState({json:JSON.stringify(a)})
        })
    }

    render (){
        return (<>{this.state.json}</>)
    }
}


export default ItemsFetch;