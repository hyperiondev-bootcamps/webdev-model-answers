import "./header.css";

const Header = () => (
  <header className="header" id="header">
    <img className="header__img" src="/img/header-img.webp" alt="header" />
    <h1 className="header__text">Dinner, made easy</h1>
    <button className="header__btn">SELECT MEALS</button>
  </header>
);

export default Header;
