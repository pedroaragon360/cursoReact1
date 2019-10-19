import React, {useState, useEffect, Suspense} from 'react'

const SubComponente = React.lazy(() => import('./lazy'))


function Hooks() {
    const [text,setText] = useState('Hola');
    const [mostrar,setMostrar] = useState(false);
    const [valorCambiante, setValorCambiante] = useState(0)
    return(
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value.replace("a","b"))}/>
            <button onClick={() => setMostrar(!mostrar)}>Ocultar</button>
            {mostrar && <Suspense fallback={<div>Loading</div>}><SubComponente valor={valorCambiante} /> </Suspense>}
            <button onClick={() => setValorCambiante(valorCambiante+1)}>Cambiar</button>
        </div>
    )

}

export default Hooks