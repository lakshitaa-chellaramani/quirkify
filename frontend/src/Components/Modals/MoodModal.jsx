import React from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from React Router
import Lottie from 'lottie-react';

import happy from '../Animations/happy.json';
import excited from '../Animations/excited.json';
import mellow from '../Animations/mellow.json';
import romantic from '../Animations/romantic.json';
import low from '../Animations/low.json';
import {mooddata} from "./mooddata"

const MoodModal = ({ mooddata, animationdata }) => {
    const handleMoodSelection = (selectedMood) => {
      console.log(`Selected Mood: ${selectedMood}`);
    
    // Redirect to a specific route based on the selected mood
    // history.push(`/mood/${selectedMood.toLowerCase()}`);
  };

  let animation;

  switch (animationdata) {
    case "excited":
      animation = excited;
      break;
    case "happy":
      animation = happy;
      break;
    case "low":
      animation = low;
      break;
      case "mellow":
      animation = mellow;
      break;
      case "romantic":
      animation = romantic;
      break;
    default:
      animation = null; // we can but modal id should be different
  }

  return (
    <>
      {/* Button to open the modal */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Open Modal
      </button>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-[#f1effe]">Select Your Mood</h3>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {/* Lottie animations representing different moods */}
            {mooddata.map((mood, index) => (
              <button
                key={index}
                className="w-full h-32 rounded-md overflow-hidden"
                onClick={() => handleMoodSelection(mood.name)}
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  animationData={mood.animationdata}  
                  height={160}
                  width={160}
                />
                <span className="sr-only">{mood.name}</span>
              </button>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MoodModal;
