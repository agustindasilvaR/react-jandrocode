import React from 'react'

let user1 = {
    'username': 'Juan',
    'email': 'juan12@gmail.com'
}

export default function ComponenteUno({telefono}) {
  return (
    <div>
        <p>{'Usuario: ' + user1.username}</p>
        <p>{'Email: ' + user1.email}</p>
        <p>{'Telefono: ' + telefono}</p>
    </div>
  )
}
