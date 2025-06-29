import React from 'react';
import CountUp from 'react-countup';
import '../styles/About.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testimonials = [
  {
    name: 'Aarav Mehta',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    feedback: 'WanderNest transformed my travel experience completely. The AI-powered recommendations were spot-on, and I discovered hidden gems I never would have found otherwise. Absolutely revolutionary!',
  },
  {
    name: 'Sylhetti Phakapehlo',
    location: 'Cape Town, South Africa',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    feedback: 'The seamless booking experience and 24/7 support made my solo adventure worry-free. WanderNest has redefined what modern travel should be like.',
  },
  {
    name: 'Rahul Verma',
    location: 'Delhi, India',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    feedback: 'From planning to execution, every detail was perfect. The personalized itinerary saved me hours of research, and the local insights were invaluable.',
  },
  {
    name: 'Emma Johnson',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    feedback: 'WanderNest made my family vacation stress-free and memorable. The kids loved the interactive travel guide, and we parents appreciated the detailed safety information.',
  },
  {
    name: 'Kenji Tanaka',
    location: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    feedback: 'The cultural immersion experiences recommended by WanderNest gave me authentic connections with locals. This platform understands what true travel means.',
  },
  {
    name: 'Maria Santos',
    location: 'São Paulo, Brazil',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    feedback: 'Sustainable travel options and eco-friendly accommodations aligned perfectly with my values. WanderNest is leading the future of responsible tourism.',
  },
];

const teamMembers = [
  {
    name: 'Utsav Choudhary',
    role: 'CEO & Founder',
    image: '/assets/profileimage.jpg',
  }
];

const features = [
  {
    title: 'Instant Booking',
    description: 'Book flights, hotels, and experiences instantly with our streamlined platform. No waiting, no delays - just seamless travel planning at your fingertips.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Local Experiences',
    description: 'Discover authentic local experiences curated by our network of travel experts and locals. Go beyond tourist traps and create meaningful connections.',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you. From last-minute changes to emergency support, we\'re always here for you.',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Sustainable Travel',
    description: 'Make a positive impact with our eco-friendly travel options. We partner with sustainable accommodations and promote responsible tourism practices.',
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Smart Budgeting',
    description: 'Track your expenses in real-time with our smart budgeting tools. Get alerts, recommendations, and insights to make the most of your travel budget.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <section className="hero-section">
          <div className="hero-images">
            <img 
              src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Travel destination" 
              className="floating-image"
            />
            <img 
              src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Adventure travel" 
              className="floating-image"
            />
            <img 
              src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Beach vacation" 
              className="floating-image"
            />
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="City exploration" 
              className="floating-image"
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">WanderNest</h1>
            <p className="hero-subtitle">The Future of Travel is Here</p>
            <p className="hero-description">
              Revolutionizing travel experiences through cutting-edge technology, personalized journeys, 
              and seamless adventures that connect you with the world like never before.
            </p>
          </div>
        </section>

        <section className="mission-section">
          <div className="section-container">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                At WanderNest, we believe that travel should be effortless, enriching, and unforgettable. 
                We're not just a booking platform — we're your travel partner in creating journeys that matter.
              </p>
              <p className="mission-text">
                Our mission is to simplify travel planning by connecting you with trusted stays, personalized experiences, 
                and seamless support every step of the way. Whether you're exploring solo or planning a trip with loved ones, 
                we're here to make every journey smooth, secure, and full of joy.
              </p>
              <p className="mission-text">
                With a focus on quality, transparency, and user-first design, WanderNest continues to earn the trust of 
                thousands of travelers worldwide. Join our growing community and let your next adventure begin with confidence.
              </p>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Travel mission"
              />
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">
                <CountUp end={50000} duration={3} separator="," />+
              </div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <CountUp end={195} duration={3} />+
              </div>
              <div className="stat-label">Countries Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <CountUp end={10000} duration={3} separator="," />+
              </div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <CountUp end={500} duration={3} />+
              </div>
              <div className="stat-label">Travel Partners</div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <h2 className="features-title">Revolutionary Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="team-container">
            <h2 className="team-title">Meet Our Visionaries</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-member" key={index}>
                  <img src={member.image} alt={member.name} className="member-image" />
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-container">
            <h2 className="testimonials-title">Traveler Stories</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="testimonial-content">
                    <p className="testimonial-text">"{testimonial.feedback}"</p>
                    <div className="stars">
                      {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;