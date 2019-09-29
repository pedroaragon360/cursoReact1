import React from 'react'
import NuevaComposicion from './NuevaComposicion'

const SelectList = (props) => 
    <select value={props.value} onChange={props.onChange}>
        {props.items.map((pais)=>
            <option key={pais.id} value={pais.id}>{pais.name}</option>
        )}
    </select>

const ConditionalRender = (props) =>
    <>{props.if ? props.children : ''}</>

const InputText = (props) => 
        <><div>{props.name}</div><input type={props.type ? props.type : 'text'} name={props.name} value={props.value} onChange={props.onChange}/></>

const TextArea = (props) => 
        <><div>{props.name}</div><textarea name={props.name} value={props.value} onChange={props.onChange} /></>

const Form = (props) => 
    <form>{props.children}</form>

    const RadioButton = (props) =>
    <>
        <div>{props.name}</div>
       { props.values.map((elemento) => (
            <label key={elemento}><input name={props.name} type="radio" value={elemento} checked={props.value == elemento} onChange={props.onChange}/>{elemento}</label>
       ))}
    </>

const CheckBoxes = (props) =>
    <>
        <div>{props.name}</div>
       { props.values.map((elemento) => (
            <label key={elemento}><input name={props.name} type="checkbox" value={elemento} checked={props.value.includes(elemento) } onChange={props.onChange}/>{elemento}</label>
       ))}
    </>

class SelectItem extends React.Component {
    paises = [{id:0,name:'España'},{id:1,name:'UK'}];
    provincias = [{id:0,name:'Malaga'},{id:1,name:'Madrid'}];
    genderList = ['hombre','mujer','transexual'];
    hobbiesList = ['nadar','programar'];
    state = {
        paisSelected:1,
        nombre: 'Pedro',
        apellido: 'Aragon',
        descripcion: 'Si',
        gender: 'hombre',
        age: '18',
        provincia: '',
        myHobbies:[]
    }
    fieldUpdate = (e) => {
        console.log(e.target.name)
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    showForm = (e) => {
        console.log(this.state)
        e.preventDefault()
    }
    arrayUpdate = (e) => 
    {
       
        
        const value = e.target.checked;
       if(value){
            this.setState({
                myHobbies: [...this.state.myHobbies,e.target.value]
            })
       } else {
            var filtered = this.state.myHobbies.filter((val) => val !== e.target.value );
            this.setState({myHobbies: filtered})
        }
        // this.setState({
        //     myHobbies: [...myHobbies,value]
        // })
    }

    render(){
        return (
            <Form>
                <InputText name="nombre" value={this.state.nombre} onChange={this.fieldUpdate}/>
                <InputText name="apellido" value={this.state.apellido} onChange={this.fieldUpdate}/>
                <TextArea name="descripcion" value={this.state.descripcion} onChange={this.fieldUpdate}/>
                <RadioButton name="gender" values={this.genderList} value={this.state.gender} onChange={this.fieldUpdate}/>
                <InputText name="age" type="number" value={this.state.age} onChange={this.fieldUpdate}/>
                <SelectList onChange={(event) => this.setState({paisSelected: event.target.value})} value={this.state.paisSelected} items={this.paises} />
                <ConditionalRender if={this.state.paisSelected == 0}>
                    <SelectList onChange={(event) => this.setState({provincia: event.target.value})} value={this.state.provincia} items={this.provincias} />
                </ConditionalRender>
                <NuevaComposicion name="myHobbies" values={this.hobbiesList} value={this.state.myHobbies} onChange={this.arrayUpdate}/>
                <input type="submit" onClick={this.showForm} value="Enviar"/>
            </Form>
        )
    }

}


export default SelectItem;