import React from 'react';


export default (props) => {
    const nuevoTab = props.newTab ? '_blank' : ''
    return <a target={nuevoTab} href={props.url}>{props.children}</a>
}
