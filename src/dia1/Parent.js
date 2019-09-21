import React from 'react';
import Child from './Child';


export default () => {
    const consola = () => console.log("Hola a2 todos")
    return <Child onPress={consola}></Child>
}