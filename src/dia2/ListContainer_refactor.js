import React from 'react'

const List = (props) => 
    <ul>{props.children}</ul>

const ListItem = props => 
            <li><input type="text" value={props.item.val}  onChange={(e) => props.onChange(e,props.item.id) } /><Boton label="borrar" onClick={() => props.eliminarItem(props.item.id)} /></li>

const Campo = props => 
     <input type="text" value={props.value} />

const Boton = props => 
        <button onClick={props.onClick}>{props.label}</button>

const InputText = props =>
        <input type="text" value={props.value} onChange={props.onChange}  onKeyUp={props.onKeyUp} />

class ListContainer extends React.Component {

    state = {items: [{id:1,val:'hola'},{id:2,val:'pedro'}],text:''}

    addItem = () => {
        let lastid = 0;
        this.state.items.map(element => {
            lastid= (element.id > lastid) ? element.id : lastid
        })
        lastid++;
        let newItem = {id:lastid, val:this.state.text};
        this.setState({items: [...this.state.items,newItem], text:''})
    }
    

    eliminarItem = (val3) => {
        var filtered = this.state.items.filter((val) => val.id !== val3 );
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
                       <ListItem key={element.id} item={element} onChange={this.updateItem} eliminarItem={this.eliminarItem} />
                )}
                
                
                    <InputText value={this.state.text} id="0" onChange={this.updatingNew} onKeyUp={this.watchEnter} />
                    <Boton onClick={this.addItem} label="Añadir2"/>

            </List>
        )
    }

}

export default ListContainer;