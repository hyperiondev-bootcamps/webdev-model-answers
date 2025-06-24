import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function TransactionControls({ deposit, withdraw, addInterest, chargeFees }) {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [feeAmount, setFeeAmount] = useState("");

  return (
    <div className="text-center mt-4">
      {/* Deposit */}
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Deposit Amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(Number(e.target.value))}
        />
        <button
          className="btn btn-success mt-2"
          onClick={() => deposit(depositAmount)}
        >
          Deposit
        </button>
      </div>

      {/* Withdraw */}
      <div className="form-group mt-3">
        <input
          type="number"
          className="form-control"
          placeholder="Withdraw Amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(Number(e.target.value))}
        />
        <button
          className="btn btn-danger mt-2"
          onClick={() => withdraw(withdrawAmount)}
        >
          Withdraw
        </button>
      </div>

      {/* Add Interest */}
      <div className="form-group mt-3">
        <input
          type="number"
          className="form-control"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={() => addInterest(interestRate)}
        >
          Add Interest
        </button>
      </div>

      {/* Charge Fees */}
      <div className="form-group mt-3">
        <input
          type="number"
          className="form-control"
          placeholder="Bank Fees Amount"
          value={feeAmount}
          onChange={(e) => setFeeAmount(Number(e.target.value))}
        />
        <button
          className="btn btn-warning mt-2"
          onClick={() => chargeFees(feeAmount)}
        >
          Charge Fees
        </button>
      </div>
    </div>
  );
}

// Adding PropTypes for prop validation
TransactionControls.propTypes = {
  deposit: PropTypes.func.isRequired,
  withdraw: PropTypes.func.isRequired,
  addInterest: PropTypes.func.isRequired,
  chargeFees: PropTypes.func.isRequired,
};

export default TransactionControls;
