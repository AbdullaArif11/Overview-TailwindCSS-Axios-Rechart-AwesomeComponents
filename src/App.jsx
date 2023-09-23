import './App.css'
import Daisynav from './Components/DaisyNav/Daisynav'
import Navbar from './Components/DaisyNav/Navbar'
import PriceOption from './Components/PriceOption/PriceOption'

function App() {

  return (
    <>
      <Daisynav></Daisynav>
      <h1 className="text-7xl bg-orange-300">Vite + React</h1>
      <Navbar></Navbar>
      <PriceOption></PriceOption>
    </>
  )
}

export default App
