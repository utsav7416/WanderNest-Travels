import "../styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer"
import { setPropertyList } from "../redux/state";

const PropertyList = () => {

  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.user);

  const propertyList = user?.propertyList;

  console.log(user)

  const dispatch = useDispatch();

  const getPropertyList = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/${user._id}/properties`,
        {
          method: "GET"
        }
      )
      const data = await response.json()
      console.log(data)
      dispatch(setPropertyList(data))
      setLoading(false)
    } catch (err) {
      console.log("Could not fetch properties", err.message)
    }
  }

  useEffect(() => {
    getPropertyList()
  }, [])

  return loading ? <Loader /> : (
    <>
      <Navbar />
      <h1 className="title-list">Your Property List</h1>
      <div className="list">

        {propertyList?.map(
          ({
            _id,
            creator,
            listingPhotoPaths,
            city,
            country,
            category,
            type,
            price,
            booking = false,
          }) => (
            <ListingCard
              listingId={_id}
              creator={creator}
              listingPhotoPaths={listingPhotoPaths}
              city={city}
              country={country}
              category={category}
              type={type}
              price={price}
              booking={booking}
            />
          )
        )}

      </div>
      <Footer />
    </>
  );
};

export default PropertyList;