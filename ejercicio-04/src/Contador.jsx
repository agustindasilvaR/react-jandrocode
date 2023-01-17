import React from 'react'
import { useState } from 'react'

function Contador() {

    const [counter, setCounter] = useState(0);

    function aumentar() {
        setCounter(counter+1);
    }
    function decrementar() {
        setCounter(counter-1);
        if(counter <= 0) {
            setCounter(0);
        }
    }
    function reset(){
        setCounter(0);
    }

  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={aumentar}>Incremento</button>
        <button onClick={decrementar}>Decremento</button>
        <button onClick={reset}>Reset</button>
    </div>

  )
}

export default Contador
