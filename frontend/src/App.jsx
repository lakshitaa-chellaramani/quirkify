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
import ProductCard from './Components/MenuPage/CardGenerator';
import Location from './Components/Location';

import Modalcom from './Components/EventCalendar/Modalcom';
import Calender from './Components/EventCalendar/Calender';
import LoginSignUp from './Components/Welcome/LoginSignUp';
import Test from './Components/MenuPage/Test';
import Preorder from './Components/Modals/Preorder';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import MoodModa from './Components/Modals/MoodModa'

import OurTable from './Components/Screens/OurTable';
import AdminOrder from './Components/AdminOrder'

function App() {
  const [count, setCount] = useState(0);

  return (
  
      <Router>
      <Navbar className="sticky"/>
      
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/admin/order" element={<AdminOrder/>} />
          <Route path="/login" element={<LoginSignUp/>} />
          <Route path="/feedback" element={<FeedbackForm/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/locationmap" element={<LocationMap/>} />
          <Route path="/modalcom" element={<Modalcom/>} />
          {/* <Route path="/calender" element={<Calender/>} /> */}
          <Route path="/productcard" element={<ProductCard/>} />
          {/* <Route path="/eventCalendar" element={<EventCalendar/>} /> */}
          <Route path="/admin" element={<Admin/>} />
          <Route path='/mood' element={<MoodModa/>} />

          {/* <Route path='/menu' element={<OurTable/>} /> */}
        </Routes>
      </Router>
     
  );
}

export default App;