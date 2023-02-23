import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TransactionHistory from "./components/TransationHistory";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "deposit",
      amount: 1000,
    },
    {
      id: 2,
      type: "withdrawal",
      amount: 500,
    },
  ]);

  const [transactionType, setTransactionType] = useState("deposit");
  const [transactionAmount, setTransactionAmount] = useState("");

  const addTransaction = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      type: transactionType,
      amount: transactionAmount,
    };
    setTransactions([...transactions, newTransaction]);
    setTransactionAmount("");
  };

  return (
    <>
    <Navbar/>
    <TransactionHistory/>
    </>
  );
}

export default App;
