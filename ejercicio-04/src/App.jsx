import { useState } from 'react'
import Contador from './Contador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Contador/>
    </div>
  )
}

export default App
