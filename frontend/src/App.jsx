import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './Components/Hero';
import LocationMap from './Components/LocationMap';
import CardGenerator from './Components/MenuPage/CardGenerator';
import HomeProductCards from './Components/HomPageCards/HomeProductCards';
import Dashboard from './Components/Menu/Asides';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CartPage from './Components/Cart/CartPage';
import FeedbackForm from './Components/FeedBackForm';
import Testimonials from './Components/Testimonials';
import MoodModal from './Components/Modals/MoodModal';
import ProductCard from './Components/Modals/MoodModa';
import Location from './Components/Location';


function App() {
  const [count, setCount] = useState(0);

  return (
  
      <Router>
      <Navbar />
      <CardGenerator/>
      <ProductCard/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/location" element={<Location />} />
          <Route path="/veg" element={<Vegb />} />

        </Routes>
      </Router>
     
  );
}

export default App;