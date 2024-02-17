import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Components/Navbar'
import Hero from './Components/Hero'
import LocationMap from './Components/LocationMap'
import Admin from './Components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Nabvar/>
      <Hero/>
      <LocationMap/> */}
      <Nabvar/>
      <Admin></Admin>
     
    </>
  )
}

export default App
