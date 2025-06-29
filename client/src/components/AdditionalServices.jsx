import React, { useState } from 'react';
import '../styles/AdditionalServices.scss';

const AdditionalServices = ({ onServicesChange }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      id: 'airport-pickup',
      name: 'Airport Pickup',
      description: 'Professional driver will pick you up from the airport',
      price: 65,
      icon: '🚗'
    },
    {
      id: 'chef-service',
      name: 'In-House Chef',
      description: 'Personal chef for breakfast and dinner preparation',
      price: 120,
      icon: '👨‍🍳'
    },
    {
      id: 'cleaning-service',
      name: 'Daily Cleaning',
      description: 'Professional cleaning service during your stay',
      price: 35,
      icon: '🧹'
    },
    {
      id: 'concierge',
      name: 'Concierge Service',
      description: '24/7 concierge for bookings and recommendations',
      price: 25,
      icon: '🛎️'
    },
    {
      id: 'grocery-shopping',
      name: 'Grocery Shopping',
      description: 'Pre-arrival grocery shopping and stocking',
      price: 30,
      icon: '🛒'
    },
    {
      id: 'laundry',
      name: 'Laundry Service',
      description: 'Wash, dry, and fold service',
      price: 20,
      icon: '👕'
    }
  ];

  const toggleService = (service) => {
    const isSelected = selectedServices.find(s => s.id === service.id);
    let newServices;
    
    if (isSelected) {
      newServices = selectedServices.filter(s => s.id !== service.id);
    } else {
      newServices = [...selectedServices, service];
    }
    
    setSelectedServices(newServices);
    onServicesChange(newServices);
  };

  const getTotalServicesCost = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  return (
    <div className="additional-services">
      <h3>Enhance Your Stay</h3>
      <p className="services-subtitle">Add premium services to make your trip unforgettable</p>
      
      <div className="services-grid">
        {services.map((service) => {
          const isSelected = selectedServices.find(s => s.id === service.id);
          
          return (
            <div 
              key={service.id} 
              className={`service-card ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleService(service)}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <div className="service-price">${service.price}/day</div>
              </div>
              <div className="service-checkbox">
                <div className={`checkbox ${isSelected ? 'checked' : ''}`}>
                  {isSelected && '✓'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedServices.length > 0 && (
        <div className="services-summary">
          <h4>Selected Services</h4>
          <div className="selected-services-list">
            {selectedServices.map((service) => (
              <div key={service.id} className="selected-service">
                <span>{service.icon} {service.name}</span>
                <span>${service.price}/day</span>
              </div>
            ))}
          </div>
          <div className="services-total">
            <strong>Additional Services Total: ${getTotalServicesCost()}/day</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdditionalServices;