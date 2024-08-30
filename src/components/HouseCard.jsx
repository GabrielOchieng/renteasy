import home from "../assets/images/homebg.jpeg";
import { useDeleteHouseMutation } from "../redux/slices/housesApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const HouseCard = ({ house, onViewDetails }) => {
  const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo);
  // console.log(house.images[0]);
  // Assuming house object has properties like address, images, rentPrice
  const { _id, town, estate, images, rentPrice, propertyType } = house;

  const [deleteHouse, { isLoading }] = useDeleteHouseMutation();

  const isLandlord = house?.landlord._id === userInfo?.user._id;

  const handleDelete = async () => {
    if (!userInfo) return;
    if (window.confirm("Are you sure you want to delete this house?")) {
      try {
        await deleteHouse(_id);
        // Handle successful deletion (e.g., remove from UI)
        console.log("House deleted successfully!");
        toast.success("House deleted successfully!");
      } catch (error) {
        console.error("Error deleting house:", error);
        // Handle deletion error (e.g., display error message)
      }
    }
  };
  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col space-y-2">
      <img
        src={images && images[0] ? images[0] : home} // Display first photo or placeholder
        alt="House"
        className="w-full h-96 object-cover rounded-t-md"
        width={48}
        height={48}
      />

      <div className="flex justify-between items-center">
        <span className="text-gray-700">
          Type: <span className="font-bold">{propertyType}</span>{" "}
        </span>

        <span className="text-gray-700">
          Rent: <span className="font-bold">Ksh.{rentPrice}/month</span>
        </span>
        {/* <span className="text-gray-700">Bedrooms: {bedrooms}</span> */}
        {/* <span className="text-gray-700"> {street}</span> */}
      </div>
      <div className="flex justify-between items-center">
        {/* <span className="text-gray-700 font-bold"> {propertyType}</span> */}

        {/* <span className="text-gray-700">Rent: Ksh.{rentPrice}/month</span> */}
        <span className="text-gray-700">
          Location: <span className="font-bold">{town}</span>
        </span>
        <span className="text-gray-700">
          Estate: <span className="font-bold">{estate}</span>
        </span>
      </div>
      {/* <p className="text-gray-600 line-clamp-2"></p> */}
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        onClick={() => onViewDetails()} // Call onViewDetails prop function on click
      >
        View Details
      </button>
      {isLandlord && (
        <button
          className={`w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 ${
            isLoading ? "bg-gray-200 text-gray-400 cursor-not-allowed" : ""
          }`}
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      )}
    </div>
  );
};

export default HouseCard;
