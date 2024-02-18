import React, { useState } from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = () => {
    // Implement your payment logic or redirect to a payment gateway
    console.log("Processing payment...");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="payment-methods">
        <label>
          <input
            type="radio"
            value="creditCard"
            checked={paymentMethod === "creditCard"}
            onChange={() => handlePaymentMethodChange("creditCard")}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => handlePaymentMethodChange("paypal")}
          />
          PayPal
        </label>
      </div>
      {paymentMethod === "creditCard" && (
        <div className="credit-card-details">
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </label>
        </div>
      )}
      <button className="checkout-btn" onClick={handlePayment}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
