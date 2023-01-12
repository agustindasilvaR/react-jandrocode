import { useState } from 'react'
import './App.css'
import ComponenteUno from './ComponenteUno'
import ComponenteDos from './ComponenteDos'

function App() {

  return (
    <div>
      <h2>Usuario 1</h2>
      <ComponenteUno telefono="603211578"/>
      <h2>Usuario 2</h2>
      <ComponenteDos telefono="607245592"/>
    </div>
  )
}

export default App
