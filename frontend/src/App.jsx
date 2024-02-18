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
import CartPage from './Components/Cart/CartPage';
import FeedbackForm from './Components/FeedBackForm';
import Testimonials from './Components/Testimonials';
import MoodModal from './Components/Modals/MoodModal';
import ProductCard from './Components/Modals/MoodModa';
import Location from './Components/Location';

import Modalcom from './Components/EventCalendar/Modalcom';
import Calender from './Components/EventCalendar/Calender';
import LoginSignUp from './Components/Welcome/LoginSignUp';


function App() {
  const [count, setCount] = useState(0);

  return (
  
      <Router>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/login" element={<LoginSignUp/>} />
          <Route path="/feedback" element={<FeedbackForm/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/locationmap" element={<LocationMap/>} />
          <Route path="/homeproductcards" element={<HomeProductCards/>} />
          <Route path="/modalcom" element={<Modalcom/>} />
          {/* <Route path="/calender" element={<Calender/>} /> */}
          <Route path="/productcard" element={<ProductCard/>} />
          {/* <Route path="/eventCalendar" element={<EventCalendar/>} /> */}

        </Routes>
      </Router>
     
  );
}

export default App;