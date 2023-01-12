import React from 'react'



function retornable(text) {
    return text;
}

function FunctionComponent() {
  return (
    <div>
        <p>{retornable('function component = libreria baroja berserk')}</p>
    </div>
  )
}

export default FunctionComponent
