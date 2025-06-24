import Card from "./card";
import "./whyUcook.css";
import chefImg from "/img/chef.svg"; // Adjust path according to your structure
import moneyImg from "/img/money.svg";
import produceImg from "/img/fresh.svg";
import decisionsImg from "/img/brain.svg";
import commitmentImg from "/img/commitment.svg";
import boxImg from "/img/convienience.svg";

const WhyUcook = () => {
  const items = [
    {
      icon: chefImg,
      title: "Chef Quality Meals",
      description:
        "Enjoy meals prepared by top chefs with high-quality ingredients.",
    },
    {
      icon: moneyImg,
      title: "Affordable Pricing",
      description:
        "Get delicious meals delivered at a price that suits your budget.",
    },
    {
      icon: produceImg,
      title: "Fresh Produce",
      description:
        "All ingredients are sourced from local farms for the freshest taste.",
    },
    {
      icon: decisionsImg,
      title: "Healthy Decisions",
      description:
        "Make healthier choices with balanced meal options tailored for you.",
    },
    {
      icon: commitmentImg,
      title: "Sustainability Commitment",
      description:
        "We prioritize sustainability in our sourcing and packaging.",
    },
    {
      icon: boxImg,
      title: "Convenient Delivery",
      description:
        "Meals are delivered right to your doorstep for your convenience.",
    },
  ];

  return (
    <section className="why__container">
      <h1 className="why__header">Why UCOOK?</h1>
      <div className="why__cards">
        {items.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUcook;
