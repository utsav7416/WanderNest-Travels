import { useEffect, useState } from "react";
import "../styles/ListingDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { facilities } from "../data";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import enUS from "date-fns/locale/en-US";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import AdditionalServices from "../components/AdditionalServices";
import ShareableLink from "../components/ShareableLink";

const ListingDetails = () => {
  const [loading, setLoading] = useState(true);
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const getListingDetails = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/properties/${listingId}`,
        { method: "GET" }
      );
      const data = await response.json();
      setListing(data);
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const start = new Date(dateRange[0].startDate);
  const end = new Date(dateRange[0].endDate);
  const dayCount = Math.max(
    1,
    Math.round((end - start) / (1000 * 60 * 60 * 24))
  );

  const getServicesCost = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  const getTotalPrice = () => {
    const baseCost = listing.price * dayCount;
    const servicesCost = getServicesCost() * dayCount;
    return baseCost + servicesCost;
  };

  const customerId = useSelector((state) => state?.user?._id);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const bookingForm = {
        customerId,
        listingId,
        hostId: listing?.creator?._id,
        startDate: dateRange[0].startDate.toDateString(),
        endDate: dateRange[0].endDate.toDateString(),
        totalPrice: getTotalPrice(),
        selectedServices: selectedServices,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/bookings/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingForm),
        }
      );

      if (response.ok) {
        navigate(`/${customerId}/trips`);
      }
    } catch (err) {
      console.log("Submit Booking Failed.", err.message);
    }
  };

  const handleServicesChange = (services) => {
    setSelectedServices(services);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <div className="listing-details">
        <div className="title">
          <h1>{listing.title}</h1>
          <div></div>
        </div>

        <div className="photos">
          {listing.listingPhotoPaths?.map((item, index) => (
            <img
              key={index}
              src={`${process.env.REACT_APP_API_URL}/${item.replace(
                "public",
                ""
              )}`}
              alt="listing photo"
            />
          ))}
        </div>

        <h2>
          {listing.type} in {listing.city}, {listing.country}
        </h2>
        <p>
          {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
          {listing.bathroomCount} bathroom(s)
        </p>
        <hr />

        <div className="profile">
          {listing.creator ? (
            <>
              <img
                src={
                  listing.creator.profileImagePath
                    ? `${
                        process.env.REACT_APP_API_URL
                      }/${listing.creator.profileImagePath.replace(
                        "public",
                        ""
                      )}`
                    : "/assets/default_profile_pic.jpg"
                }
                alt="Host profile"
              />
              <h3>
                Hosted by {listing.creator.firstName} {listing.creator.lastName}
              </h3>
            </>
          ) : (
            <p>No host information available.</p>
          )}
        </div>
        <hr />

        <h3>Description</h3>
        <p>{listing.description || "No description available."}</p>
        <hr />

        <p>{listing.highlightDesc || ""}</p>
        <hr />

        <div className="booking">
          <div className="booking-left">
            <h2>What this place offers?</h2>
            <div className="amenities">
              {listing.amenities && listing.amenities[0] ? (
                listing.amenities[0].split(",").map((item, index) => (
                  <div className="facility" key={index}>
                    <div className="facility_icon">
                      {
                        facilities.find(
                          (facility) =>
                            facility.name.trim().toLowerCase() ===
                            item.trim().toLowerCase()
                        )?.icon
                      }
                    </div>
                    <p>{item}</p>
                  </div>
                ))
              ) : (
                <p>No amenities listed.</p>
              )}
            </div>

            <AdditionalServices onServicesChange={handleServicesChange} />

            <div className="decorative-images">
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop"
                alt="Travel destination 1"
              />
              <img
                src="https://theluxuryeditor.com/wp-content/uploads/2018/09/104682512.jpg"
                alt="Travel destination 2"
              />
              <img
                src="https://media.gettyimages.com/id/626429848/photo/northern-lights-green-aurora-borealis-over-alesund-norway.jpg?s=612x612&w=gi&k=20&c=i2F5G2FFddnZulZ4URn7eUZxNqIsMuUxXPOmR0b0liU="
                alt="Travel destination 3"
              />
              <img
                src="https://www.bsr.org/images/heroes/bsr-travel-hero..jpg"
                alt="Travel destination 4"
              />
            </div>
          </div>

          <div className="booking-right">
            <h2>How long do you want to stay?</h2>
            <div className="date-range-calendar">
              <DateRange
                ranges={dateRange}
                onChange={handleSelect}
                locale={enUS}
              />
              {dayCount > 1 ? (
                <h2>
                  ${listing.price} x {dayCount} nights
                </h2>
              ) : (
                <h2>
                  ${listing.price} x {dayCount} night
                </h2>
              )}

              {selectedServices.length > 0 && (
                <div className="services-cost-breakdown">
                  <h3>Additional Services:</h3>
                  {selectedServices.map((service, index) => (
                    <p key={index}>
                      {service.name}: ${service.price} x {dayCount} days = ${service.price * dayCount}
                    </p>
                  ))}
                  <p><strong>Services Total: ${getServicesCost() * dayCount}</strong></p>
                </div>
              )}

              <h2>Total price: ${getTotalPrice()}</h2>
              <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
              <p>End Date: {dateRange[0].endDate.toDateString()}</p>

              {/* ShareableLink moved here - directly below calendar */}
              <div className="shareable-link-section">
                <ShareableLink 
                  listing={listing}
                  dateRange={dateRange}
                  totalPrice={getTotalPrice()}
                  selectedServices={selectedServices}
                />
              </div>

              <button className="button" type="submit" onClick={handleSubmit}>
                CONFIRM BOOKING
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ListingDetails;