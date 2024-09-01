import { IoPersonCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetHouseQuery } from "../redux/slices/housesApiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import Map from "../components/Map";
import HouseDetailsSkeleton from "../components/HouseDetailsSkeleton";
import Carousel from "../components/Carousel";

const HouseDetails = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { houseId } = useParams();
  const user = userInfo?.user;
  const [showSellerInfo, setShowSellerInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetHouseQuery(houseId);

  const isLandlord = data?.landlord?._id === user?._id;
  const landlord = data?.landlord;

  if (isLoading) {
    return <HouseDetailsSkeleton />;
  }

  if (error) {
    return (
      <p className="text-center p-4 text-red-500">
        Error fetching house details
      </p>
    );
  }

  const toggleSellerInfo = () => setShowSellerInfo(!showSellerInfo);

  const handleStartChat = async () => {
    if (userInfo) {
      try {
        const response = await axios.post(
          "https://rent-api-7hnw.onrender.com/conversations",
          {
            senderId: user?._id,
            receiverId: landlord?._id,
          }
        );
        // const conversationId = response.data._id
        // navigate(`/chats/${conversationId}`);
      } catch (err) {
        console.error("Error creating conversation:", err);
      }
    } else {
      navigate("/login");
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    document.body.style.overflow = ""; // Enable scrolling
  };

  // useEffect(() => {
  //   // Cleanup on component unmount
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, []);

  return (
    <div className="container mx-auto p-6 lg:p-8 bg-white rounded-lg shadow-lg relative my-10">
      <h1 className="text-3xl font-bold mb-6">{data?.propertyType}</h1>

      {/* Image Carousel or Grid */}
      <div className="relative">
        {data.images && data.images.length > 0 ? (
          data.images.length > 1 ? (
            <Carousel images={data.images} openModal={openModal} />
          ) : (
            <img
              src={data.images[0]}
              alt="House"
              className="rounded-lg w-full h-72 object-cover cursor-pointer"
              onClick={() => openModal(data.images[0])}
            />
          )
        ) : (
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="rounded-lg w-full h-72 object-cover"
          />
        )}
      </div>

      <div className="mt-4 flex flex-col lg:flex-row lg:justify-between border border-gray-200 rounded-lg p-6 mb-6 bg-gray-50">
        <Map town={data?.town} />
        <div className="mt-4 lg:mt-0 lg:ml-6">
          <p className="text-lg font-semibold mb-2">
            Rent:{" "}
            <span className="font-bold">Ksh.{data?.rentPrice} per month</span>
          </p>
          <p className="mb-2">Bedrooms: {data?.bedrooms}</p>
          <p className="mb-2">Location: {data?.town}</p>
          <p>Description: {data?.description}</p>
        </div>
      </div>

      <button
        className="text-green-600 hover:underline mb-4"
        onClick={toggleSellerInfo}
      >
        {showSellerInfo ? "Hide Seller Information" : "Show Seller Information"}
      </button>

      {showSellerInfo && (
        <div className="w-full flex items-center border border-gray-300 rounded-lg p-6 bg-white">
          <IoPersonCircleOutline className="h-16 w-16 text-green-500" />
          <div className="ml-4">
            <p className="text-lg font-semibold mb-2">
              Landlord Name: {data?.landlord?.name}
            </p>
            {!isLandlord ? (
              <Link
                to={`/chats`}
                className="text-green-500 hover:underline"
                onClick={handleStartChat}
              >
                Chat to enquire more
              </Link>
            ) : (
              <p className="text-gray-600">
                You are the landlord of this property.
              </p>
            )}
          </div>
        </div>
      )}

      {!userInfo && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-gray-700">Login to view more information</p>
          <Link
            to="/login"
            className="text-green-500 hover:underline mt-2 block"
          >
            Login
          </Link>
        </div>
      )}

      {/* Modal for image preview */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 mb-32"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default HouseDetails;
