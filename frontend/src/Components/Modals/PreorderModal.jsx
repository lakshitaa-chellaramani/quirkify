import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Timer from "./Timer";
import "./PreorderModal.css";

Modal.setAppElement("#root");

const PreorderModal = ({ isOpen, onRequestClose, estimatedTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(estimatedTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1000);

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeRemaining]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Preorder Modal"
      className="preorder-modal"
      overlayClassName="preorder-modal-overlay"
    >
      <div className="preorder-content">
        <h2>Preorder Information</h2>
        <p>Your order will be ready for pickup/delivery in:</p>
        <Timer timeRemaining={timeRemaining} />
        <button className="close-btn" onClick={onRequestClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default PreorderModal;
