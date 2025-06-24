// This component displays the user's current balance.
// It receives the 'balance' as a prop from its parent component.
function BalanceDisplay({ balance }) {
  return (
    // Using Bootstrap's alert-primary class to show the balance in a styled alert box.
    <div className="alert alert-primary text-center mt-3">
      {/* Displaying the balance as a heading (h2) and ensuring it has 2 decimal places */}
      <h2>Current Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
}

// Exporting the component to make it available for import in other files.
export default BalanceDisplay;
