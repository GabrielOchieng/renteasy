import home from "../assets/images/homebg.jpeg";
import { useDeleteHouseMutation } from "../redux/slices/housesApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const HouseCard = ({ house, onViewDetails }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { _id, town, estate, images, rentPrice, propertyType } = house;

  const [deleteHouse, { isLoading }] = useDeleteHouseMutation();

  const isLandlord = userInfo && house?.landlord._id === userInfo?.user?._id;

  const handleDelete = async () => {
    if (!userInfo) return;
    if (window.confirm("Are you sure you want to delete this house?")) {
      try {
        await deleteHouse(_id);
        toast.success("House deleted successfully!");
      } catch (error) {
        console.error("Error deleting house:", error);
        toast.error("Error deleting house.");
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <img
        src={images && images[0] ? images[0] : home}
        alt="House"
        className="w-full h-72 object-cover rounded-md"
      />

      <div className="">
        <div className=" mb-2">
          <span className="text-gray-700 text-lg font-semibold">
            {propertyType}
          </span>
        </div>
        <div>
          <p>{house.description}</p>
        </div>
        <div className="flex  gap-3 items-center mb-4">
          <span className="border border-gray-400 rounded-full px-1 text-sm text-gray-800">
            {town}
          </span>

          <span className="border border-gray-400 rounded-full px-1 text-sm text-gray-800">
            {estate}
          </span>
          <span className="border border-gray-400 rounded-full px-1 text-sm text-gray-800">
            {house.bedrooms} bedrooms
          </span>
          <span className="border border-gray-400 rounded-full px-1 text-sm text-gray-800">
            {house.bathrooms} bathrooms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-lg font-semibold">
            Ksh.{rentPrice}/month
          </span>
          <button
            className=" bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            onClick={onViewDetails}
          >
            View Details
          </button>
        </div>

        {isLandlord && (
          <button
            className={`w-full mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 ${
              isLoading ? "bg-gray-200 text-gray-400 cursor-not-allowed" : ""
            }`}
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </div>
  );
};

export default HouseCard;
