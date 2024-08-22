import { useParams } from "react-router-dom";
import {
  useDeleteHouseMutation,
  useGetUserHousesQuery,
} from "../redux/slices/housesApiSlice";
import HouseCard from "../components/HouseCard";

const UserHousesPage = () => {
  const { userId } = useParams(); // Get user ID from route parameters
  const { data: houses, isLoading } = useGetUserHousesQuery(userId);
  const [
    deleteProduct,
    { isLoading: isDeleting, isSuccess, error: deleteError },
  ] = useDeleteHouseMutation();

  if (isLoading) {
    return <div>Loading User Houses...</div>;
  }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  if (!houses?.length)
    return <div className="h-screen p-10">You have no listed houses.</div>;

  const handleDeleteHouse = async (houseId) => {
    try {
      await deleteProduct(houseId); // Call deleteProduct mutation with house ID
    } catch (err) {
      console.error("Error deleting house:", err);
    }
  };

  return (
    <div className="bg-gray-100 w-full">
      <div className="container mx-auto px-4 py-10 ">
        <h1 className="font-bold mb-3">Your listed Listed Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {houses.map((house) => (
            <HouseCard
              key={house._id}
              house={house}
              onDelete={() => handleDeleteHouse(house._id)} // Pass handleDeleteHouse function with house ID
            />
          ))}
        </div>
        {isDeleting && <div>Deleting house...</div>}
        {isSuccess && <div>House deleted successfully!</div>}
        {deleteError && <div>Error deleting house: {deleteError.message}</div>}
      </div>
    </div>
  );
};

export default UserHousesPage;