"use client";
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from "axios";
import home from "../assets/images/homebg.jpeg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetHouseQuery } from "../redux/slices/housesApiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

const HouseDetails = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { houseId } = useParams();
  const user = userInfo?.user;
  //   const [house, setHouse] = useState(null);
  const [showSellerInfo, setShowSellerInfo] = useState(false); // State for seller info visibility
  const navigate = useNavigate();

  console.log("USERINFO", userInfo);
  const { data, isLoading, error } = useGetHouseQuery(houseId);
  console.log(data);
  const isLandlord = data?.landlord?._id === user?._id;
  const landlord = data?.landlord;
  // useEffect(() => {
  //   if (data) {
  //     setHouse(data); // Update state with fetched house data
  //   }
  // }, [data]);

  if (isLoading) {
    return <p className="text-center p-4">Loading house details...</p>;
  }

  if (error) {
    return <p className="text-center p-4">Error fetching house details</p>;
  }

  const toggleSellerInfo = () => setShowSellerInfo(!showSellerInfo); // Toggle seller info visibility

  // Function to initiate chat with seller
  const handleStartChat = async () => {
    if (userInfo) {
      try {
        const response = await axios.post(
          "http://localhost:5000/conversations",
          // "https://swap-society-api.onrender.com/conversations",
          {
            senderId: user?._id,
            receiverId: landlord?._id,
          }
        );

        console.log(response);
        // 3. Redirect user to the chat page with the newly created conversation ID
        // const conversationId = response.data._id;
        // navigate(`/chats/${conversationId}`);
      } catch (err) {
        console.error("Error creating conversation:", err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col p-8  mx-auto">
      <h1 className="text-2xl font-bold mb-4">{data?.propertyType}</h1>
      <div className="flex gap-3">
        <img
          src={data.images && data.images[0] ? data?.images[0] : home}
          alt="House img"
          className="rounded-lg h-96 w-full object-cover"
          width={96}
          height={96}
        />

        <img
          src={data.images && data.images[1]}
          alt="House img"
          className="rounded-lg h-96 w-full object-cover"
          width={96}
          height={96}
        />
        <img
          src={data.images && data.images[2]}
          alt="House img"
          className="rounded-lg object-cover"
          width={96}
          height={96}
        />
      </div>
      <div className="mt-4 space-y-4 border rounded p-4">
        <p className="text-lg font-medium ">
          Rent: Ksh.{data?.rentPrice} per month
        </p>
        <p>Bedrooms: {data?.bedrooms}</p>
        <p>Location: {data?.town}</p> {/* Assuming town represents location */}
        <p>Description: {data?.description}</p>
      </div>

      {/* Seller Information Section */}
      <button
        className="text-blue-500 hover:underline mt-4"
        onClick={toggleSellerInfo}
      >
        {showSellerInfo ? "Hide Seller Information" : "Show Seller Information"}
      </button>

      {showSellerInfo &&
        (userInfo ? (
          <div className="w-full flex justify-between mt-4 border rounded items-center p-4">
            <div>
              <IoPersonCircleOutline className="h-48 w-48 text-blue-400" />
            </div>
            <div>
              <p>Landlord Name: {data?.landlord?.name}</p>
              {!isLandlord && (
                <Link
                  to="/chats"
                  className="text-blue-400"
                  onClick={handleStartChat} // Pass seller ID
                >
                  Chat to enquire more
                </Link>
              )}
              {/* <p>Contact Information: {data.contactInfo}</p> */}
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-between mt-4 border rounded items-center p-4">
            <IoPersonCircleOutline className="h-48 w-48" />
            <Link to="/login">Login to view more information</Link>
          </div>
        ))}
    </div>
  );
};

export default HouseDetails;
