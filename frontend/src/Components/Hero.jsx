import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import foodtruck from "./Animations/foodtruck.json";
import OurTable from "./Screens/OurTable";
import { Link } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";



const Hero = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white ">
      <a href="#menu">
        <FaAngleDoubleDown className="btn_down" />
      </a>
      <section className="py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 style={{fontFamily : "Oswald, sans-serif", letterSpacing : ".1rem"}} className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                The Mobile Food Hub!
                <div className="underlineContainer relative inline-flex">
                  <span className="underline absolute inset-x-0 bottom-0 border-b-[30px] border-lavender"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl px-2">
                    <span>   </span>Quirkify.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Fire up the app, tap your order, and savor the taste of
                Quirkify in minutes. Your favorites, faster than ever.
              </p>

              <div className="mt-5 sm:flex sm:items-center sm:space-x-8 justify-center">
                <Link to='/dashboard'><button className='adminNavButton text-lg px-7 py-2 border-2 rounded-[0.25rem] border-[#9381FF] text-[#9381FF]'>Start Exploring</button></Link>
              </div>
            </div>

            <div>
              <Lottie
                animationData={foodtruck}
                className="relative w-full  mt-6 h-48  lg:h-[68vh] lg:object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div id="menu"></div>
      <OurTable/>
    </div>
  );
};
export default Hero;
