import React from "react";
import Mood from "./Mood.txt";
import { mooddata } from "./mooddata";

const ProductCard = () => {
  // Replace these with your actual product details

  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className=" adminNavButton text-lg px-7 py-2 border-2 rounded-[0.25rem] border-[#9381FF] text-[#9381FF]">
        Moods
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-full max-w-6xl">
          <h1 className="text-2xl text-center py-8 font-semibold tracking-tighter text-zinc-600 ">Select your mood</h1>
          <div className="grid gap-4 grid-cols-3 px-10">
            {mooddata.map((mood, index) => {
              return <Mood key={index} {...mood} />;
            })}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default ProductCard;
