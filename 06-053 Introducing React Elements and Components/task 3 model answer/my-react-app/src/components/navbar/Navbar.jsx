import "./navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__item">
      <img className="navbar__item--1" src="/img/large.svg" alt="logo" />
      <li className="navbar__item--2">MEAL KITS</li>
      <li className="navbar__item--3">FROZEN</li>
      <li className="navbar__item--4">WINE</li>
      <li className="navbar__item--5">MARKET</li>
      <li className="navbar__item--7">WEEKEND BOXES</li>
      <li className="navbar__item--8">ABOUT UCOOK</li>
      <li className="navbar__item--9">PARTNER WITH US</li>
      <li className="navbar__item--10">GIFT CARDS</li>
      <li className="navbar__item--12">FATHERS DAY BOX</li>
      <button className="navbar__item--13">Login</button>
      <button className="navbar__item--14">Sign up</button>
      <img
        className="navbar__item--15"
        src="/img/heroicons--shopping-cart-16-solid (1).png"
        alt="cart"
      />
    </div>
  </nav>
);

export default Navbar;
