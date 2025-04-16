import React from 'react';
import CountUp from 'react-countup';
import '../styles/About.scss';
import Navbar from '../components/Navbar';

const testimonials = [
  {
    name: 'Aarav Mehta',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    feedback: 'WanderNest made my trip to Kerala unforgettable. The booking process was seamless!',
  },
  {
    name: 'Sylhetti Phakapehlo',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
    feedback: 'Great experience with WanderNest. Highly recommend for hassle-free travel planning.',
  },
  {
    name: 'Rahul Verma',
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    rating: 5,
    feedback: 'Exceptional service and support throughout my journey. Kudos to the team!',
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
      <section className="intro">
        <h1>About WanderNest</h1>
        <p>
            At <strong>WanderNest</strong>, we believe that travel should be effortless, enriching, and unforgettable. 
            We’re not just a booking platform — we’re your travel partner in creating journeys that matter.
        </p>
        <p>
            Our mission is to simplify travel planning by connecting you with trusted stays, personalized experiences, 
            and seamless support every step of the way. Whether you're exploring solo or planning a trip with loved ones, 
            we’re here to make every journey smooth, secure, and full of joy.
        </p>
        <p>
            With a focus on quality, transparency, and user-first design, WanderNest continues to earn the trust of 
            thousands of travelers. Join our growing community and let your next adventure begin with confidence.
        </p>
        </section>

        <section className="stats">
          <div className="stat">
            <h2><CountUp end={5000} duration={3} />+</h2>
            <p>Happy Travelers</p>
          </div>
          <div className="stat">
            <h2><CountUp end={120} duration={3} />+</h2>
            <p>Destinations Covered</p>
          </div>
          <div className="stat">
            <h2><CountUp end={300} duration={3} />+</h2>
            <p>Partners</p>
          </div>
        </section>

        <section className="testimonials">
          <h2>What Our Travelers Say</h2>
          <div className="testimonial-cards">
            {testimonials.map((t, index) => (
              <div className="card" key={index}>
                <img src={t.image} alt={t.name} />
                <h3>{t.name}</h3>
                <div className="stars">
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
                <p>"{t.feedback}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
