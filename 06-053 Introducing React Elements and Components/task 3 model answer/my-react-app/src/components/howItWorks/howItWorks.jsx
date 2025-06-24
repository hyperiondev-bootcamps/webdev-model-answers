import "./howItWorks.css";
const HowItWorks = () => (
  <section className="how-it-works" id="how">
    <h1 className="how__header">How does it work?</h1>
    <div className="how__container">
      <div className="how__choose">
        <img
          className="how__choose--img"
          src="/img/you-choose.svg"
          alt="choose"
        />
        <h3 className="how__choose--header">1. You choose</h3>
        <p className="how__choose--p">
          Sign up, pick from 24 new dinner recipes every week and explore our
          range of lunch, wine, market, and frozen craft meals. Orders close 9am
          Wed - pause at any time!
        </p>
      </div>
      <div className="how__deliver">
        <img
          className="how__deliver--img"
          src="/img/deliver.svg"
          alt="deliver"
        />
        <h3 className="how__deliver--header">2. We Deliver</h3>
        <p className="how__deliver--p">
          Get a weekly delivery of top quality, perfectly-portioned fresh
          produce, shipped in an insulated cold box, straight to your door.
        </p>
      </div>
      <div className="how__cook">
        <img className="how__cook--img" src="/img/cook.svg" alt="cook" />
        <h3 className="how__cook--header">3. You cook</h3>
        <p className="how__cook--p">
          Get simple-to-follow recipes and create restaurant-quality dishes in
          your own home with no more meal planning or food waste.
        </p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
