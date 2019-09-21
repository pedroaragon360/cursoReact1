import React from 'react'

const List = (props) => 
    <ul>{props.children}</ul>

const ListItem = (props) => {
    return (
        props.items.map((val,key) => 
            <li key={key}><input type="text" value={val} /><button onClick={() => props.eliminarItem(key)}>Borrar</button></li>
        )
    )
}


class ListContainer extends React.Component {

    state = {items: ["a","b"],text:''}

    addItem = () => {
        this.setState({items: [...this.state.items,this.state.text], text:''})
    }

    eliminarItem = (key) => {
        var filtered = this.state.items.filter(function(value, index, arr){

            return index !== key;
        
        });

        this.setState({items: filtered})
    }
    updatingNew = (e) => {
        this.setState({text:e.target.value})
    }
    watchEnter = (e) => {
        console.log(e.key)
        if(e.keyCode === 'Enter'){
            this.addItem()
        }
    }
    render(){
        return (
            <List>   
                
                <ListItem eliminarItem={this.eliminarItem} items={this.state.items} />
                <li><input value={this.state.text} onChange={this.updatingNew} onKeyPress={this.watchEnter} type="text" /><button onClick={this.addItem}>Añadir</button></li>

            </List>
        )
    }

}

export default ListContainer;