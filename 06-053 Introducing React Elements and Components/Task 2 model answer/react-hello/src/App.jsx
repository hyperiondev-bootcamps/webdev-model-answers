import "./App.css"; // Importing the CSS file for styling

// Defining a user object with various properties
const user = {
  name: "John",
  surname: "Smith",
  date_of_birth: "25th October 1990",
  address: "21 Main St",
  country: "South Africa",
  email: "test@gmail.com",
  telephone: "0812345678",
  company: "HyperionDev",
  profile_picture:
    "https://images.unsplash.com/photo-1531989417401-0f85f7e673f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbmtleSUyMHR5cGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  // Array of shopping cart items
  shopping_cart: ["eggs", "cheese", "bread", "milk"],
};

// Main functional component for the app
function App() {
  return (
    <div className="App">
      {/* Displaying user information */}
      <h1>User Information</h1>
      {/* Profile picture with alt text */}
      <img
        src={user.profile_picture}
        alt="Profile of John Smith"
        width="150"
        height="150"
      />
      <p>
        Name: {user.name} {user.surname}
      </p>
      <p>Date of Birth: {user.date_of_birth}</p>
      <p>Address: {user.address}</p>
      <p>Country: {user.country}</p>
      <p>Email: {user.email}</p>
      <p>Telephone: {user.telephone}</p>
      <p>Company: {user.company}</p>

      {/* Displaying shopping cart items */}
      <h2>Shopping Cart</h2>
      <ul>
        {/* Mapping through each shopping cart item */}
        {user.shopping_cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Exporting the App component for use in other parts of the application
export default App;
