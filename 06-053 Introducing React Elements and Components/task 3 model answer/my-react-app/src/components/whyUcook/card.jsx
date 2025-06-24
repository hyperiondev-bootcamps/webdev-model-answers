// Card.js
import "./card.css";
import PropTypes from "prop-types";

const Card = ({ icon, title, description }) => (
  <div className="why__card">
    {" "}
    {/* Added the class name here */}
    <div className="why__card--img">
      <img src={icon} alt={`${title} Icon`} width={192} height={192} />
    </div>
    <div className="why__card--text">
      <h3 className="why__card--title">{title}</h3>
      <p className="why__card--description">{description}</p>
    </div>
  </div>
);

// Prop validation
Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
