import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Components/Nabvar'
import Hero from './Components/Hero'
import LocationMap from './Components/LocationMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nabvar/>
      <Hero/>
      <LocationMap/>
     
    </>
  )
}

export default App
