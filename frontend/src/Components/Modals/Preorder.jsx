import React, { useState } from "react";
import PreorderModal from "./PreorderModal";
import DatetimePicker from "react-datetime-picker";
import "./Preorder.css";

const Preorder = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [estimatedTime, setEstimatedTime] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);

    // Calculate the estimated time in milliseconds
    const now = new Date();
    const differenceInMilliseconds = date.getTime() - now.getTime();
    setEstimatedTime(differenceInMilliseconds);
  };

  return (
    <div className="preorder-container">
      <button className="preorder-btn" onClick={openModal}>
        Preorder
      </button>
      {isModalOpen && (
        <DatetimePicker
          onChange={handleDateTimeChange}
          value={selectedDateTime}
          className="datetime-picker"
        />
      )}
      <PreorderModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        estimatedTime={estimatedTime}
      />
    </div>
  );
};

export default Preorder;
