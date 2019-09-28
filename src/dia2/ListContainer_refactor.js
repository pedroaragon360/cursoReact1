import React from 'react'

const List = (props) => 
    <ul>{props.children}</ul>

const ListItem = props => 
            <li><input type="text" value={props.val} onChange={(e) => props.updateItem(e,props.key) } /><Boton label="borrar" onClick={() => props.eliminarItem(props.val)} /></li>

const Campo = props => 
     <input type="text" value={props.value} />

const Boton = props => 
        <button onClick={props.onClick}>{props.label}</button>

const InputText = props =>
        <input type="text" value={props.value} onChange={props.onChange}  onKeyUp={props.onKeyUp} />

class ListContainer extends React.Component {

    state = {items: [{id:1,val:'hola2'}],text:''}

    addItem = () => 
        this.setState({items: [...this.state.items,this.state.text], text:''})
    

    eliminarItem = (val3) => {
        var filtered = this.state.items.filter((val) => val !== val3 );
        this.setState({items: filtered})
    }
    updatingNew = (e) => 
        this.setState({text:e.target.value})
    
    watchEnter = (e) => {
        if(e.keyCode == 13) this.addItem()
    }

    updateItem = (e,id) => {
        console.log(id)
        let task = this.state.items.map(element => {
            if(element.id === id) element.val=e.target.value
            return element
        })
        this.setState({items: task})
    }

    render(){
        return (
            <List>   
                {this.state.items.map((element) => 
                       <ListItem key={element.id} val={element.val} updateItem={this.updateItem} eliminarItem={this.eliminarItem} items={this.state.items} />
                )}
                
                
                    <InputText value={this.state.text} onChange={this.updatingNew} onKeyUp={this.watchEnter} />
                    <Boton onClick={this.addItem} label="Añadir"/>
                



            </List>
        )
    }

}

export default ListContainer;