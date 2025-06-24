import { useState, useEffect, useRef } from "react"; // Import necessary React hooks
import "./App.css"; // Import CSS for styling the component

function App() {
  // State to hold the name input by the user
  const [name, setName] = useState("");
  // State to hold the predicted nationality
  const [nationality, setNationality] = useState(null);
  // Ref to access the input field directly
  const inputRef = useRef(null);

  // Function to fetch nationality based on the name
  const fetchNationality = async () => {
    // Check if the name is not empty
    if (name) {
      try {
        // Fetch data from the nationalize.io API using the input name
        const response = await fetch(`https://api.nationalize.io?name=${name}`);
        const data = await response.json(); // Parse the response to JSON
        const firstCountry = data.country[0]; // Get the first country from the response
        setNationality(firstCountry); // Update state with the nationality data
      } catch (error) {
        // Log any errors that occur during the fetch
        console.error("Error fetching nationality:", error);
      }
    }
  };

  // Effect to auto-focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus(); // Focus on the input field
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Nationality Predictor</h1>
      <input
        ref={inputRef} // Assign the ref to the input field
        type="text" // Input type is text
        value={name} // Controlled input with value from state
        onChange={(e) => setName(e.target.value)} // Update state on input change
        placeholder="Enter a name" // Placeholder text for the input
      />
      <button onClick={fetchNationality}>Predict Nationality</button>{" "}
      {/* Button to trigger nationality fetch */}
      {nationality && ( // Conditionally render the result if nationality is available
        <div className="result">
          <h2>Predicted Nationality:</h2>
          <p>Country: {nationality.country_id}</p>{" "}
          {/* Display the predicted country */}
          <p>Probability: {(nationality.probability * 100).toFixed(2)}%</p>{" "}
          {/* Display the probability */}
        </div>
      )}
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
