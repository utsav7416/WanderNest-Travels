import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/SharedTrip.scss';

const SharedTrip = () => {
  const { encodedData } = useParams();
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const decodedData = atob(encodedData);
      const parsedData = JSON.parse(decodedData);
      setTripData(parsedData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to decode trip data:', error);
      setLoading(false);
    }
  }, [encodedData]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="shared-trip-loading">
          <div className="loading-spinner"></div>
          <p>Loading trip details...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!tripData) {
    return (
      <>
        <Navbar />
        <div className="shared-trip-error">
          <h2>Invalid Trip Link</h2>
          <p>The trip link you're trying to access is invalid or has expired.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="shared-trip">
        <div className="trip-header">
          <h1>🌟 Shared Trip Itinerary</h1>
          <p>Your friend has shared this amazing trip with you!</p>
        </div>

        <div className="trip-container">
          <div className="trip-images">
            {tripData.images && tripData.images.length > 0 ? (
              <div className="images-grid">
                {tripData.images.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={`${process.env.REACT_APP_API_URL}/${image.replace('public', '')}`}
                    alt={`Trip image ${index + 1}`}
                  />
                ))}
              </div>
            ) : (
              <div className="no-images">
                <span>📸</span>
                <p>No images available</p>
              </div>
            )}
          </div>

          <div className="trip-details">
            <div className="detail-card">
              <h2>{tripData.title}</h2>
              <div className="location">
                <span>📍</span>
                <span>{tripData.location}</span>
              </div>
            </div>

            <div className="detail-card">
              <h3>📅 Travel Dates</h3>
              <div className="dates">
                <div className="date-item">
                  <span>Check-in:</span>
                  <span>{tripData.startDate}</span>
                </div>
                <div className="date-item">
                  <span>Check-out:</span>
                  <span>{tripData.endDate}</span>
                </div>
              </div>
            </div>

            <div className="detail-card">
              <h3>🏠 Accommodation Details</h3>
              <div className="accommodation-info">
                <div className="info-item">
                  <span>👥 Guests:</span>
                  <span>{tripData.guestCount}</span>
                </div>
                <div className="info-item">
                  <span>🛏️ Bedrooms:</span>
                  <span>{tripData.bedrooms}</span>
                </div>
                <div className="info-item">
                  <span>🚿 Bathrooms:</span>
                  <span>{tripData.bathrooms}</span>
                </div>
              </div>
            </div>

            {tripData.services && tripData.services.length > 0 && (
              <div className="detail-card">
                <h3>✨ Additional Services</h3>
                <div className="services-list">
                  {tripData.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <span>{service.icon || '🔹'} {service.name}</span>
                      <span>${service.price}/day</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tripData.amenities && tripData.amenities.length > 0 && (
              <div className="detail-card">
                <h3>🎯 Amenities</h3>
                <div className="amenities-list">
                  {tripData.amenities[0].split(',').slice(0, 6).map((amenity, index) => (
                    <span key={index} className="amenity-tag">
                      {amenity.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-card price-card">
              <h3>💰 Total Cost</h3>
              <div className="price-display">
                <span className="price">${tripData.totalPrice}</span>
                <span className="price-note">All taxes & insurance included</span>
              </div>
            </div>

            <div className="action-buttons">
              <button className="book-now-btn">
                Book This Trip
              </button>
              <button className="view-details-btn">
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SharedTrip;