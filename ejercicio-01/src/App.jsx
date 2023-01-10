
import './styles/App.css'
import Header from './Header'
import Card from './Card'

function App() {


  return (
    <div>
    <Header/>
    <div className="row1">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className="row2">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>

  )


}

export default App
