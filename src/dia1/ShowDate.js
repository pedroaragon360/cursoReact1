import React from 'react';


const ShowDate = () => { 
    const getDate = () => new Date().toDateString()

    return <span>{getDate()}</span> 
}

export default ShowDate;    