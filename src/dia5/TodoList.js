import React from 'react'

function TodoList(props) {
    if(props.data.length == 0) return (<div>Cargando</div> )

    
    return(
        <ul style={{textAlign:'left'}}>{props.data.map((valor,key) => {
            return (
            <li key={key}>{valor.title}</li>
            )
        })}</ul>
    )
}

export default TodoList