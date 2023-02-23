import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";
import "./TransactionHistory.css";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch the transaction history data from an API and update the state
    // of the component with the new data.
    fetch("/api/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="transaction-history">
      <div className="transaction-header">
        <div className="transaction-header-date">Date</div>
        <div className="transaction-header-description">Description</div>
        <div className="transaction-header-amount">Amount</div>
      </div>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          amount={transaction.amount}
          date={transaction.date}
          description={transaction.description}
        />
      ))}
    </div>
  );
}

export default TransactionHistory;