import React from 'react';
import './Hero.css';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImg} alt="Lavish Indian Feast" />
        <div className="overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text animate-fade-in-up">
          <h1>Authentic <br /><span>Indian Flavors.</span></h1>
          <p className="delay-100 animate-fade-in-up">
            Experience the rich culinary heritage of India right here on Ring Road in Ranchi.
            Vibrant spices, traditional recipes, and an unforgettable dining experience.
          </p>
          <div className="hero-cta delay-200 animate-fade-in-up">
            <a href="#menu" className="btn btn-primary">Our Menu</a>
            <a href="#visit" className="btn btn-secondary">Find Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
