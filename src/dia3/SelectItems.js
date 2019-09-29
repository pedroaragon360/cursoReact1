import React from 'react'

const Paises = (props) => 
    <select value={props.value} onChange={props.onChange}>
        {props.items.map((pais)=>
            <option key={pais.id} value={pais.id}>{pais.name}</option>
        )}
    </select>

class SelectItem extends React.Component {
    state = {
        paises:[{id:0,name:'España'},{id:1,name:'UK'}],
        paisSelected:1}

    render(){
        return (
            <Paises onChange={(event) => this.setState({paisSelected: event.target.value})} value={this.state.paisSelected} items={this.state.paises} />
        )
    }

}


export default SelectItem;