import React from 'react'

let user2 = {
    'username': 'Pablo',
    'email': 'pablo36@gmail.com'
}

export default function ComponenteDos({telefono}) {
  return (
    <div>
        <p>{'Usuario: ' + user2.username}</p>
        <p>{'Email: ' + user2.email}</p>
        <p>{'Telefono: ' + telefono}</p>
    </div>
  )
}
