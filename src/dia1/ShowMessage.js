import React from 'react';
import ShowMessage2 from './ShowMessage2';


const showMessage = () => { 
    const siMostrar = false;
    
    // return (siMostrar ? <><ShowMessage2 /><ShowMessage2 /></> : '')
    return siMostrar ? <><ShowMessage2 /><ShowMessage2 /></> : ''
}

export default showMessage;