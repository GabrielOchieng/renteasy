import { useParams } from "react-router-dom";
import {
  useDeleteHouseMutation,
  useGetUserHousesQuery,
} from "../redux/slices/housesApiSlice";
import HouseCard from "../components/HouseCard";
import HouseCardSkeleton from "../components/HouseCardSkeleton";

const UserHousesPage = () => {
  const { userId } = useParams(); // Get user ID from route parameters
  const { data: houses, isLoading } = useGetUserHousesQuery(userId);
  const [
    deleteProduct,
    { isLoading: isDeleting, isSuccess, error: deleteError },
  ] = useDeleteHouseMutation();

  if (isLoading) {
    return (
      <div>
        {" "}
        <HouseCardSkeleton />
      </div>
    );
  }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const handleDeleteHouse = async (houseId) => {
    try {
      await deleteProduct(houseId); // Call deleteProduct mutation with house ID
    } catch (err) {
      console.error("Error deleting house:", err);
    }
  };

  const handleViewDetails = (houseId) => {
    // Navigate to the house details page using a routing library (e.g., React Router)
    const pathToDetailsPage = `/houses/${houseId}`; // Replace with your actual path
    window.location.href = pathToDetailsPage; // Basic navigation for demonstration
  };

  return (
    <div className="bg-gray-100 w-full">
      <div className="container mx-auto px-4 py-10 ">
        <h1 className="font-bold mb-3">Your Listed Houses</h1>
        {houses === undefined || houses?.length < 1 ? (
          <div className="h-screen font-bold p-10">
            You have no listed houses.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {houses?.map((house) => (
              <HouseCard
                key={house._id}
                house={house}
                onViewDetails={() => handleViewDetails(house._id)}
                onDelete={() => handleDeleteHouse(house._id)} // Pass handleDeleteHouse function with house ID
              />
            ))}
          </div>
        )}

        {isDeleting && <div>Deleting house...</div>}
        {isSuccess && <div>House deleted successfully!</div>}
        {deleteError && <div>Error deleting house: {deleteError.message}</div>}
      </div>
    </div>
  );
};

export default UserHousesPage;
