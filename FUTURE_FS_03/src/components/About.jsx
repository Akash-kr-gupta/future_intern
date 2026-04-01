import React from 'react';
import './About.css';
import interiorImg from '../assets/images/interior.png';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container about-container">
        <div className="about-text">
          <h2>Our <i>Story</i></h2>
          <div className="underline"></div>
          <p>
            Welcome to Aangan, where the rich traditions of Indian cooking meet modern elegance. 
            Located in the heart of Ring Road, Ranchi, Jharkhand, our chefs bring decades of 
            experience crafting authentic dishes passed down through generations.
          </p>
          <p>
            Whether you are joining us for a family feast, a casual dinner, or a celebration, 
            Aangan offers a warm, inviting atmosphere that honors the true hospitality of India. 
            Come taste the spices that define our heritage.
          </p>
          <button className="btn btn-primary mt-4">Read More</button>
        </div>
        <div className="about-image">
          <img src={interiorImg} alt="Upscale Indian Restaurant Interior" />
        </div>
      </div>
    </section>
  );
};

export default About;
