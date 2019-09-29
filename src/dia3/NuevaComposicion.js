import React from 'react'
import Composicion from './Composicion'

const NuevaComposicion = (props) => 
    <>
        <div>{props.name}</div>
        <Composicion {...props} />
    </>


export default NuevaComposicion;