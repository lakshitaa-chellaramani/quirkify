import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Components/Nabvar'
import Hero from './Components/Hero'
import LocationMap from './Components/LocationMap'
import CardGenerator from './Components/MenuPage/CardGenerator'
import HomeProductCards from './Components/HomPageCards/HomeProductCards'
import Dashboard from './Components/Menu/Asides'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Dashboard/>
     
    </>
  )
}

export default App
