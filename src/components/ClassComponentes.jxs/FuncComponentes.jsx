import { useState } from "react"


function FuncComponent(){
    const [value, setValue] = useState (0)
    //const value = [0], es igual al value arriba
    //const update, es igual al setValue de arriba

    return (<div>
        Componente Funcional
        <p>
            <button 
                onClick={ () => 
                    setValue(value-1)}>
                -
            </button> 
            {value}
            <button onClick={ () => 
                    setValue(value+1)}>
            +
            </button>
        </p>
    </div>
    )
}

export default FuncComponent