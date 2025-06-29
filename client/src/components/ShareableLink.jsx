import React, { useState } from 'react';
import '../styles/ShareableLink.scss';

const ShareableLink = ({ listing, dateRange, totalPrice, selectedServices = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [linkGenerated, setLinkGenerated] = useState(false);
  const [shareableUrl, setShareableUrl] = useState('');

  const generateShareableLink = () => {
    const tripData = {
      listingId: listing._id,
      title: listing.title,
      location: `${listing.city}, ${listing.country}`,
      startDate: dateRange[0].startDate.toDateString(),
      endDate: dateRange[0].endDate.toDateString(),
      totalPrice: totalPrice,
      services: selectedServices,
      guestCount: listing.guestCount,
      bedrooms: listing.bedroomCount,
      bathrooms: listing.bathroomCount,
      amenities: listing.amenities,
      images: listing.listingPhotoPaths?.slice(0, 3) || []
    };

    const encodedData = btoa(JSON.stringify(tripData));
    const baseUrl = window.location.origin;
    const generatedUrl = `${baseUrl}/shared-trip/${encodedData}`;
    
    setShareableUrl(generatedUrl);
    setLinkGenerated(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareableUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`Check out this amazing trip: ${listing.title}`);
    const body = encodeURIComponent(`I found this great place for our trip!\n\n${listing.title}\nLocation: ${listing.city}, ${listing.country}\nDates: ${dateRange[0].startDate.toDateString()} - ${dateRange[0].endDate.toDateString()}\nTotal: $${totalPrice}\n\nView details: ${shareableUrl}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const shareViaWhatsApp = () => {
    const message = encodeURIComponent(`Check out this amazing trip! ${listing.title} in ${listing.city}, ${listing.country}. Dates: ${dateRange[0].startDate.toDateString()} - ${dateRange[0].endDate.toDateString()}. Total: $${totalPrice}. View details: ${shareableUrl}`);
    window.open(`https://wa.me/?text=${message}`);
  };

  return (
    <>
      <button className="share-trip-btn" onClick={() => setIsModalOpen(true)}>
        <span>📤</span>
        Share Trip with Friends
      </button>

      {isModalOpen && (
        <div className="share-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="share-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Share Your Trip</h3>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            </div>

            <div className="trip-summary">
              <div className="trip-image">
                {listing.listingPhotoPaths && listing.listingPhotoPaths[0] && (
                  <img 
                    src={`${process.env.REACT_APP_API_URL}/${listing.listingPhotoPaths[0].replace('public', '')}`}
                    alt={listing.title}
                  />
                )}
              </div>
              <div className="trip-details">
                <h4>{listing.title}</h4>
                <p className="location">{listing.city}, {listing.country}</p>
                <p className="dates">{dateRange[0].startDate.toDateString()} - {dateRange[0].endDate.toDateString()}</p>
                <p className="price">Total: ${totalPrice}</p>
                {selectedServices.length > 0 && (
                  <div className="services">
                    <p>Additional Services:</p>
                    <ul>
                      {selectedServices.map((service, index) => (
                        <li key={index}>{service.name} - ${service.price}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {!linkGenerated ? (
              <button className="generate-link-btn" onClick={generateShareableLink}>
                Generate Shareable Link
              </button>
            ) : (
              <div className="share-options">
                <div className="link-container">
                  <input 
                    type="text" 
                    value={shareableUrl} 
                    readOnly 
                    className="share-link-input"
                  />
                  <button className="copy-btn" onClick={copyToClipboard}>
                    Copy Link
                  </button>
                </div>

                <div className="share-buttons">
                  <button className="share-btn email" onClick={shareViaEmail}>
                    📧 Email
                  </button>
                  <button className="share-btn whatsapp" onClick={shareViaWhatsApp}>
                    💬 WhatsApp
                  </button>
                  <button className="share-btn copy" onClick={copyToClipboard}>
                    📋 Copy Link
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShareableLink;