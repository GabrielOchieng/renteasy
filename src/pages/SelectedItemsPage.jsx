import { useParams } from "react-router-dom";
import { useGetHousesQuery } from "../redux/slices/housesApiSlice";
import HouseCard from "../components/HouseCard";
import HouseCardSkeleton from "../components/HouseCardSkeleton";

const SelectedItems = () => {
  const { data: houses, isLoading } = useGetHousesQuery();

  const { filter } = useParams();
  if (!houses) return null; // Display loading indicator or nothing

  //   const filteredHouses = filter
  //     ? houses.filter(
  //         (house) => house.town === filter || house.priceRange === filter
  //       )
  //     : houses; // If no filter, show all houses

  const filteredHouses = filter
    ? houses.filter((house) => {
        const lowerCaseFilter = filter.toLowerCase();
        return (
          house.town.toLowerCase() === lowerCaseFilter ||
          house.estate?.toLowerCase() === lowerCaseFilter ||
          house.propertyType?.toLowerCase() === lowerCaseFilter ||
          house.rentPrice <= filter
        );
      })
    : houses; // If no filter, show all houses

  const noHouse = filteredHouses.length === 0;

  const handleViewDetails = (houseId) => {
    // Navigate to the house details page using a routing library (e.g., React Router)
    const pathToDetailsPage = `/houses/${houseId}`; // Replace with your actual path
    window.location.href = pathToDetailsPage; // Basic navigation for demonstration
  };

  if (isLoading) {
    return <HouseCardSkeleton />;
  }

  return (
    <div className=" px-4 py-8 min-h-screen">
      <h2 className="font-bold text-center">Houses in {filter}</h2>
      <div className=" p-4 flex-wrap gap-4 ">
        {noHouse && (
          <p className="text-center mx-auto">
            No houses found matching {filter}
          </p>
        )}
        {/* Display filtered houses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredHouses.map((house) => (
            <HouseCard
              key={house._id}
              onViewDetails={() => handleViewDetails(house._id)}
              house={house}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedItems;
