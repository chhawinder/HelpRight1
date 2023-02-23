import React from "react";
import "./Transaction.css";

function Transaction({ amount, date, description }) {
  return (
    <div className="transaction">
      <div className="transaction-date">{date}</div>
      <div className="transaction-description">{description}</div>
      <div className="transaction-amount">{amount}</div>
    </div>
  );
}

export default Transaction;