import { useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "./img/carousel-snack.webp",
      title: "Feeling Snackish?",
      text: "Grab your favorite artisanal snacks and treats on UCOOK market.",
      button: "ORDER NOW",
    },
    {
      image: "./img/carousel-lunch.webp",
      title: "Lunch is served",
      text: "Salad, wrap, sandwich, couscous - the choice is yours!",
      button: "SHOP LUNCH",
    },
    {
      image: "./img/carousel-wine.webp",
      title: "A toast to Vilafonte!",
      text: "Add any 3 wines to your Meal Kit order and save 25%",
      button: "SHOP NOW",
    },
    {
      image: "./img/carousel-frozen.webp",
      title: "Indulge in hearty Frozen Craft Meals",
      text: "From butter chicken to cottage pie, find the perfect meal for a cosy night in.",
      button: "ORDER NOW",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="carousel">
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <div
              className="carousel-item__image"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="carousel-item__content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="carousel__arrow carousel__arrow--left"
        onClick={prevSlide}
        aria-label="Previous"
      >
        &#8249;
      </button>
      <button
        className="carousel__arrow carousel__arrow--right"
        onClick={nextSlide}
        aria-label="Next"
      >
        &#8250;
      </button>
    </section>
  );
};

export default Carousel;
