// Modal.js
import React from "react";

const Modal = ({ isOpen, closeModal, onSubmit }) => {
  const [eventDetails, setEventDetails] = React.useState({
    name: "",
    description: "",
    place: "",
    time: "",
    host: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(eventDetails);
    setEventDetails({
      name: "",
      description: "",
      place: "",
      time: "",
      host: "",
    });
    closeModal();
  };

  return (
    <div
      className={`fixed top-0  left-0 backdrop-blur z-50 w-full h-full bg-black bg-opacity-80 flex  justify-center items-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-[40svw] p-8 rounded-3xl shadow-md">
        <h2 className="text-xl heading text-center font-bold mb-4">Add Event</h2>
        <label className="block mb-2  Paras">
          Event Name:
          <input
            type="text"
            name="name"
            value={eventDetails.name}
            onChange={handleChange}
            className="block input input-bordered border-zinc-200  w-full  rounded-xl mt-1"
          />
        </label>
        <label className="block mb-2 Paras">
          Description:
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            className="block textarea textarea-bordered w-full border-zinc-200 rounded-xl mt-1"
          />
        </label>
        <label className="block mb-2 Paras">
          Place:
          <input
            type="text"
            name="place"
            value={eventDetails.place}
            onChange={handleChange}
            className="block w-full input input-bordered border-zinc-200 rounded-xl mt-1"
          />
        </label>
        <label className="block mb-2 Paras">
          Time:
          <input
            type="text"
            name="time"
            value={eventDetails.time}
            onChange={handleChange}
            className="block w-full input input-bordered border-zinc-200 rounded-xl mt-1"
          />
        </label>
        <label className="block mb-2 Paras">
          Host:
          <input
            type="text"
            name="host"
            value={eventDetails.host}
            onChange={handleChange}
            className="block w-full input input-bordered border-zinc-200 rounded-xl mt-1"
          />
        </label>
        <div className="flex justify-center items-center py-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 btn heading tracking-wide bg-[#9381ff] text-white rounded-xl ml-2 hover:bg-gray-600"
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 btn heading tracking-wide bg-[#0c0c0c] text-white rounded-xl ml-2 hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
