import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonial">
        <div className="testimonial-content">
          <h4>Amanda R</h4>
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <p>
            “We just love UCOOK, even my teens have started saying UCOOK is the
            bomb!”
          </p>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonial-content">
          <h4>Angelique N</h4>
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <p>
            “Keep doing what you do! The food is delicious and easy to cook. I
            honestly cannot brag about it enough. Every meal has so much flavour
            and tastes amazing!”
          </p>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonial-content">
          <h4>Mignon K</h4>
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <p>
            “Loving that I dont have to plan, buy and prepare a weeks meals.
            There is 0 food wastage. Thank you for helping us with super easy
            and delicious dinners!”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
