import { useParams } from "react-router-dom";
import { useGetHousesQuery } from "../redux/slices/housesApiSlice";
import HouseCard from "../components/HouseCard";

const SelectedItems = () => {
  const { data: houses } = useGetHousesQuery();

  console.log(houses);
  const { filter } = useParams();
  console.log(`Selected`, filter);
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
          house.propertyType?.toLowerCase() === lowerCaseFilter
        );
      })
    : houses; // If no filter, show all houses

  const noHouse = filteredHouses.length === 0;

  const handleViewDetails = (houseId) => {
    // Navigate to the house details page using a routing library (e.g., React Router)
    const pathToDetailsPage = `/houses/${houseId}`; // Replace with your actual path
    window.location.href = pathToDetailsPage; // Basic navigation for demonstration
  };

  return (
    <div className="pt-3 min-h-screen">
      <h2 className="font-bold text-center">Houses in {filter}</h2>
      <div className="flex p-4">
        {noHouse && (
          <p className="text-center mx-auto">
            No houses found matching {filter}
          </p>
        )}
        {/* Display filtered houses here */}
        {filteredHouses.map((house) => (
          <div key={house._id}>
            <HouseCard
              onViewDetails={() => handleViewDetails(house._id)}
              house={house}
            />
            {/* Render house details */}
            {/* ... other house details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedItems;
