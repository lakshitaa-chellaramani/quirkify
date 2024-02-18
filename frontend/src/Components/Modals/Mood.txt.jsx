import React from 'react'
import Lottie from "lottie-react";
import excited from "../Animations/excited.json"
import happy from "../Animations/happy.json"
import low from "../Animations/low.json"
import mellow from "../Animations/mellow.json"
import romantic from "../Animations/romantic.json"
import calm from "../Animations/calm.json"

const Mood = ({animationdata}) => {

    let animation;

  switch (animationdata) {
    case "happy":
      animation = happy;
      break;
    case "excited":
      animation = excited;
      break;
    case "mellow":
      animation = mellow;
      break;
      case "romantic":
      animation = romantic;
      break;
      case "low":
      animation = low;
      break;
      case "calm":
      animation = calm;
      break;
    default:
      animation = romantic; // Default to Fullstack if no match
  }
  return (
    <div>
      <div className="romanticModifier bg-[#f1effe] border border-zinc-200 rounded-3xl py-8 flex justify-center items-center">
              <Lottie 
              animationData={animation}
              className="w-40 h-40 object-cover"
  
              />
            </div>
    </div>
  )
}

export default Mood
