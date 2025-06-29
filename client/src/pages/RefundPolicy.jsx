import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/About.scss';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <section className="hero-section">
          <div className="hero-images">
            <img 
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Customer support" 
              className="floating-image"
            />
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Refund process" 
              className="floating-image"
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Refund Policy</h1>
            <p className="hero-subtitle">Transparent & Fair Resolution</p>
            <p className="hero-description">
              At WanderNest, we value your travel plans and understand that sometimes changes are inevitable. 
              Our comprehensive refund policy ensures a transparent, fair, and hassle-free resolution process 
              for all our valued travelers.
            </p>
          </div>
        </section>

        <section className="mission-section">
          <div className="section-container">
            <div className="mission-content">
              <h2 className="section-title">Our Commitment</h2>
              <p className="mission-text">
                We believe in building trust through transparency. Our refund policy is designed to protect 
                your investment while maintaining fairness for all parties involved in your travel experience.
              </p>
              <p className="mission-text">
                Whether you're dealing with unexpected changes or unforeseen circumstances, our dedicated 
                support team is here to guide you through the process with empathy and efficiency.
              </p>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Customer support team"
              />
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <h2 className="features-title">Cancellation Policies</h2>
            <div className="features-grid">
              
              <div className="feature-card">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Customer cancellation" 
                  className="feature-image" 
                />
                <h3 className="feature-title">Cancellation by Customer</h3>
                <div className="policy-list">
                  <div className="policy-item positive">
                    <span className="policy-icon">✔</span>
                    <span>Full refunds for cancellations made within 24 hours of booking</span>
                  </div>
                  <div className="policy-item positive">
                    <span className="policy-icon">✔</span>
                    <span>Partial refunds based on timing and partner policies</span>
                  </div>
                  <div className="policy-item negative">
                    <span className="policy-icon">✘</span>
                    <span>No refunds for no-shows or late cancellations</span>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Company cancellation" 
                  className="feature-image" 
                />
                <h3 className="feature-title">Cancellation by WanderNest</h3>
                <p className="feature-description">
                  If WanderNest or our partners need to cancel your booking due to unforeseen 
                  circumstances, you'll be offered a full refund or alternate travel options 
                  at no extra cost. We prioritize your travel experience above all.
                </p>
              </div>

              <div className="feature-card">
                <img 
                  src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Refund process" 
                  className="feature-image" 
                />
                <h3 className="feature-title">How to Request a Refund</h3>
                <p className="feature-description">
                  Contact us at <strong style={{color: '#00ffff'}}>wandernest@support.com</strong> with your booking ID 
                  and details. Our support team will review your request and process refunds 
                  within <strong style={{color: '#00ffff'}}>7–10 business days</strong>.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7-10</div>
              <div className="stat-label">Business Days Processing</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Transparent Process</div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;