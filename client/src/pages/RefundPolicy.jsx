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

        <section className="content-section timeline-immersion">
          <div className="container">
            <div className="section-header">
              <h2>Cancellation Timeline</h2>
              <p>Visual breakdown of refund percentages based on timing</p>
            </div>
            
            <div className="timeline-container">
              <div className="timeline-track"></div>
              
              <div className="timeline-point point-90">
                <div className="point-visual">
                  <img
                    src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Early planning"
                  />
                  <div className="point-overlay">
                    <span className="percentage">100%</span>
                  </div>
                </div>
                <div className="point-content">
                  <h4>90+ Days</h4>
                  <p>Full refund minus $150 admin fee</p>
                </div>
              </div>

              <div className="timeline-point point-60">
                <div className="point-visual">
                  <img
                    src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Planning phase"
                  />
                  <div className="point-overlay">
                    <span className="percentage">75%</span>
                  </div>
                </div>
                <div className="point-content">
                  <h4>60-89 Days</h4>
                  <p>75% refund of total cost</p>
                </div>
              </div>

              <div className="timeline-point point-30">
                <div className="point-visual">
                  <img
                    src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Mid planning"
                  />
                  <div className="point-overlay">
                    <span className="percentage">50%</span>
                  </div>
                </div>
                <div className="point-content">
                  <h4>30-59 Days</h4>
                  <p>50% refund of total cost</p>
                </div>
              </div>

              <div className="timeline-point point-14">
                <div className="point-visual">
                  <img
                    src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Late planning"
                  />
                  <div className="point-overlay">
                    <span className="percentage">25%</span>
                  </div>
                </div>
                <div className="point-content">
                  <h4>14-29 Days</h4>
                  <p>25% refund of total cost</p>
                </div>
              </div>

              <div className="timeline-point point-0">
                <div className="point-visual">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Last minute"
                  />
                  <div className="point-overlay">
                    <span className="percentage">0%</span>
                  </div>
                </div>
                <div className="point-content">
                  <h4>Under 14 Days</h4>
                  <p>No refund available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section policies-detailed">
          <div className="container">
            <div className="section-header">
              <h2>Comprehensive Coverage</h2>
              <p>Detailed breakdown of specific policy areas</p>
            </div>

            <div className="policy-categories">
              <div className="category-block flights">
                <div className="category-header">
                  <img
                    src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                    alt="Aircraft and travel"
                  />
                  <div className="header-overlay">
                    <h3>Flight & Transportation</h3>
                    <p>Airline policies and ground transport terms</p>
                  </div>
                </div>
                <div className="category-content">
                  <p>Flight cancellations follow airline-specific policies that vary significantly between carriers and fare types. We recommend refundable or changeable fares when possible, despite higher upfront costs.</p>
                  <p>Ground transportation terms vary by provider and destination. European trains often allow changes for small fees, while remote transfers require 48-hour notice to avoid charges.</p>
                </div>
              </div>

              <div className="category-block accommodations">
                <div className="category-header">
                  <img
                    src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                    alt="Luxury accommodation"
                  />
                  <div className="header-overlay">
                    <h3>Hotels & Accommodations</h3>
                    <p>Property-specific cancellation terms</p>
                  </div>
                </div>
                <div className="category-content">
                  <p>Accommodation policies vary by property type, location, and season. Standard hotels typically offer 24-48 hour free cancellation, while premium properties may require 7-14 days notice.</p>
                  <p>Remote lodges and specialty accommodations often have stricter policies due to their unique nature and limited availability. Package bookings often secure better terms than individual reservations.</p>
                </div>
              </div>

              <div className="category-block emergencies">
                <div className="category-header">
                  <img
                    src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                    alt="Emergency medical care"
                  />
                  <div className="header-overlay">
                    <h3>Emergency Situations</h3>
                    <p>Medical emergencies and unforeseen circumstances</p>
                  </div>
                </div>
                <div className="category-content">
                  <p>Documented medical emergencies involving travelers or immediate family receive flexible cancellation terms beyond standard policies. Medical documentation from licensed physicians is required.</p>
                  <p>Government travel restrictions, border closures, or Level 3+ advisories typically result in rescheduling options or future travel credits with waived standard fees.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;