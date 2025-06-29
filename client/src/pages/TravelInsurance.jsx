import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/TravelInsurance.scss';

const TravelInsurance = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is travel insurance included in all bookings?",
      answer: "Yes! All our prices include comprehensive travel insurance coverage at no additional cost. This includes trip cancellation, medical emergencies, and baggage protection."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! The price you see includes accommodation, travel insurance, taxes, and all mandatory fees. Optional services are clearly marked separately."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes! We offer flexible payment plans. You can pay 50% at booking and the remaining 50% up to 30 days before your trip departure."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="travel-insurance">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Travel with Complete Peace of Mind</h1>
            <p>All prices include comprehensive travel insurance - No extra costs, No surprises</p>
            <div className="insurance-badge">
              <span>✓ Insurance Included</span>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Travel Insurance" />
          </div>
        </div>

        <div className="coverage-section">
          <div className="container">
            <h2>What's Covered in Every Booking</h2>
            <div className="coverage-grid">
              <div className="coverage-card">
                <div className="coverage-icon">🏥</div>
                <h3>Medical Emergency</h3>
                <p>Up to $100,000 coverage for medical emergencies and hospital stays worldwide</p>
              </div>
              <div className="coverage-card">
                <div className="coverage-icon">✈️</div>
                <h3>Trip Cancellation</h3>
                <p>Full refund for trip cancellations due to illness, weather, or other covered reasons</p>
              </div>
              <div className="coverage-card">
                <div className="coverage-icon">🧳</div>
                <h3>Baggage Protection</h3>
                <p>Coverage for lost, stolen, or damaged luggage up to $2,500 per person</p>
              </div>
              <div className="coverage-card">
                <div className="coverage-icon">⏰</div>
                <h3>Travel Delays</h3>
                <p>Compensation for accommodation and meals during unexpected travel delays</p>
              </div>
              <div className="coverage-card">
                <div className="coverage-icon">🚨</div>
                <h3>Emergency Evacuation</h3>
                <p>Emergency medical evacuation and repatriation coverage up to $500,000</p>
              </div>
              <div className="coverage-card">
                <div className="coverage-icon">📞</div>
                <h3>24/7 Assistance</h3>
                <p>Round-the-clock emergency assistance hotline in multiple languages</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <div className="container">
            <h2>Transparent Pricing</h2>
            <div className="pricing-comparison">
              <div className="pricing-card traditional">
                <h3>Traditional Booking</h3>
                <div className="price-breakdown">
                  <div className="price-item">
                    <span>Accommodation</span>
                    <span>$200/night</span>
                  </div>
                  <div className="price-item">
                    <span>Travel Insurance</span>
                    <span>$45/day</span>
                  </div>
                  <div className="price-item">
                    <span>Booking Fees</span>
                    <span>$25</span>
                  </div>
                  <div className="price-item">
                    <span>Service Charges</span>
                    <span>$15</span>
                  </div>
                  <div className="total">
                    <span>Total (3 nights)</span>
                    <span>$775</span>
                  </div>
                </div>
              </div>
              <div className="pricing-card our-way">
                <div className="popular-badge">Most Popular</div>
                <h3>Our All-Inclusive Price</h3>
                <div className="price-breakdown">
                  <div className="price-item">
                    <span>Everything Included</span>
                    <span>$200/night</span>
                  </div>
                  <div className="price-item included">
                    <span>✓ Travel Insurance</span>
                    <span>Included</span>
                  </div>
                  <div className="price-item included">
                    <span>✓ All Fees</span>
                    <span>Included</span>
                  </div>
                  <div className="price-item included">
                    <span>✓ 24/7 Support</span>
                    <span>Included</span>
                  </div>
                  <div className="total savings">
                    <span>Total (3 nights)</span>
                    <span>$600</span>
                  </div>
                </div>
                <div className="savings-badge">Save $175!</div>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <div className="container">
            <h2>Payment & Insurance FAQ</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(index)}>
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TravelInsurance;