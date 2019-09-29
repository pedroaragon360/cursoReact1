import React from 'react'

const Composicion = (props) =>
    <>
       { props.values.map((elemento) => (
            <label key={elemento}><input name={props.name} type="checkbox" value={elemento} checked={props.value.includes(elemento) } onChange={props.onChange}/>{elemento}</label>
       ))}
    </>

export default Composicion;