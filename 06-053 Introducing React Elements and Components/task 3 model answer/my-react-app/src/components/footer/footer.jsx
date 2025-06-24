import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div className="footer__subscribe">
          <h3 className="footer__title">KEEP IN TOUCH WITH OUR KITCHEN</h3>
          <form className="footer__form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__input"
            />
            <button type="submit" className="footer__button">
              SIGN ME UP
            </button>
          </form>
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__column">
          <h4 className="footer__subtitle">PRODUCT</h4>
          <ul>
            <li className="footer__links">
              <a href="#">MEAL KITS</a>
            </li>
            <li className="footer__links">
              <a href="#">FROZEN</a>
            </li>
            <li className="footer__links">
              <a href="#">WINE</a>
            </li>
            <li className="footer__links">
              <a href="#">MARKET</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__subtitle">COMPANY</h4>
          <ul>
            <li className="footer__links">
              <a href="#">ABOUT</a>
            </li>
            <li className="footer__links">
              <a href="#">CAREERS</a>
            </li>
            <li className="footer__links">
              <a href="#">RECYCLING</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__subtitle">SUPPORT</h4>
          <ul>
            <li className="footer__links">
              <a href="#">FAQS</a>
            </li>
            <li className="footer__links">
              <a href="#">CONTACT</a>
            </li>
            <li className="footer__links">
              <a href="#">021 447 4424</a>
            </li>
            <li className="footer__links">
              <a href="#">072 020 1555</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__social">
          <a href="#">
            <img src="./img/apple-store.svg" alt="App Store" />
          </a>
          <a href="#">
            <img src="./img/google-play.svg" alt="Google Play" />
          </a>
          <a href="#">
            <img src="./img/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="./img/instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="./img/twitter.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="./img/icons8-youtube-48.png" alt="YouTube" />
          </a>
          <a href="#">
            <img src="./img/tiktok.png" alt="TikTok" />
          </a>
        </div>
        <div className="footer__legal">
          <p>
            &copy; 2024 YOUR COMPANY. All rights reserved |
            <a href="#">Terms & Conditions</a> |<a href="#">Privacy Policy</a> |{" "}
            <a href="#">Referral Terms</a>
          </p>
        </div>
      </div>
      <div className="original-website">
        <a href="https://www.ucook.co.za/?gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2q2j6LrjCnN5ZIbbtc1oOUomCsAWS0kiiDXBrVzX95o4Wz7IiqwwKAaArR8EALw_wcB">
          Original Website
        </a>
      </div>
    </div>
    <div className="help-button">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Arrows_right.svg"
        alt="Help Icon"
        width="20"
      />
      Help
    </div>
  </footer>
);

export default Footer;
