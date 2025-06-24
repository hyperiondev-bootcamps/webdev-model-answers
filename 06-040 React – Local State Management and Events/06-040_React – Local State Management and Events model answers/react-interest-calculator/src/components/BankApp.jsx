import BalanceDisplay from "./BalanceDisplay";
import TransactionControls from "./TransactionControls";
import { useState } from "react";

function BankApp() {
  const [balance, setBalance] = useState(1000); // Initial balance

  // Function to deposit money
  const deposit = (amount) => {
    setBalance(balance + amount);
  };

  // Function to withdraw money
  const withdraw = (amount) => {
    setBalance(balance - amount);
  };

  // Function to add interest
  const addInterest = (rate) => {
    setBalance(balance + (balance * rate) / 100);
  };

  // Function to charge fees
  const chargeFees = (feeAmount) => {
    setBalance(balance - feeAmount);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Bank Interest Calculator</h1>
      <BalanceDisplay balance={balance} />
      <TransactionControls
        deposit={deposit}
        withdraw={withdraw}
        addInterest={addInterest}
        chargeFees={chargeFees}
      />
    </div>
  );
}

export default BankApp;
