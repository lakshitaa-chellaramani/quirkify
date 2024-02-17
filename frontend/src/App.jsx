import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Nabvar from './Components/Nabvar'
import { UserCard } from './Components/UserCard'
import Hero from './Components/Hero'
import LocationMap from './Components/LocationMap'
import Admin from './Components/Admin'
import CardGenerator from './Components/MenuPage/CardGenerator'
import HomeProductCards from './Components/HomPageCards/HomeProductCards'
import Dashboard from './Components/Menu/Asides'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Nabvar />
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;