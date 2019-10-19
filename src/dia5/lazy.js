import React, {useEffect} from 'react'
import useApiCall from './useApiCall'
import TodoList from './TodoList'

function SubComponente(props) {
    
    useEffect(() => {
        return () => {
          console.log('will unmount');
        }
      }, []);
    useEffect(() => {
        console.log("updated")
    })

    const apiTasks = useApiCall('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>Mostrando subcomponente {props.valor}
                    <TodoList data={apiTasks} />
        </div>
    )
}

export default SubComponente