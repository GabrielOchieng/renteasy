import { useState, useRef } from "react";
import { useUpdateHouseMutation } from "../redux/slices/housesApiSlice";
import { toast } from "react-toastify";

const UpdateHouseModal = ({ isOpen, onClose, house }) => {
  const [street, setStreet] = useState(house.street || "");
  const [town, setTown] = useState(house.town || "");
  const [estate, setEstate] = useState(house.estate || "");
  const [address, setAddress] = useState(house.address || "");
  const [propertyType, setPropertyType] = useState(house.propertyType || "");
  const [bedrooms, setBedrooms] = useState(house.bedrooms || 0);
  const [bathrooms, setBathrooms] = useState(house.bathrooms || 0);
  const [rentPrice, setRentPrice] = useState(house.rentPrice || 0);
  const [images, setImages] = useState(house.images || []);
  const [description, setDescription] = useState(house.description || "");
  const [contactInfo, setContactInfo] = useState(house.contactInfo || "");

  const [updateHouse, { isLoading }] = useUpdateHouseMutation();
  const hiddenFileInputRef = useRef(null);

  const handleClick = () => {
    hiddenFileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", house._id);
    formData.append("street", street);
    formData.append("town", town);
    formData.append("estate", estate);
    formData.append("address", address);
    formData.append("propertyType", propertyType);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("rentPrice", rentPrice);
    formData.append("description", description);
    formData.append("contactInfo", contactInfo);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await updateHouse(formData);
      if (response && response.error === undefined) {
        toast.success("House updated successfully!");
        onClose(); // Close modal on success
      } else {
        throw new Error("Failed to update house.");
      }
    } catch (err) {
      toast.error("Error updating house. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Update Property</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  value={street}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="town"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town
                </label>
                <input
                  type="text"
                  id="town"
                  value={town}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  onChange={(e) => setTown(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="estate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estate (Optional)
                </label>
                <input
                  type="text"
                  id="estate"
                  value={estate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  onChange={(e) => setEstate(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zipcode
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="propertyType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Type
                </label>
                <select
                  id="propertyType"
                  value={propertyType}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Select Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Bedsitter">Bedsitter</option>
                  <option value="Single">Single</option>
                  <option value="OneBedroom">One Bedroom</option>
                  <option value="TwoBedroom">Two Bedroom</option>
                  <option value="ThreeBedroom">Three Bedroom</option>
                  <option value="Home">Home</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="bedrooms"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    id="bedrooms"
                    value={bedrooms}
                    required
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    onChange={(e) => setBedrooms(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="bathrooms"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    id="bathrooms"
                    value={bathrooms}
                    required
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    onChange={(e) => setBathrooms(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="rentPrice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rent Price (Ksh.)
                  </label>
                  <input
                    type="number"
                    id="rentPrice"
                    value={rentPrice}
                    required
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    onChange={(e) => setRentPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactInfo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    value={contactInfo}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    onChange={(e) => setContactInfo(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Photo
                  </label>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Select Photos
                    </button>
                    <input
                      type="file"
                      id="photo"
                      ref={hiddenFileInputRef}
                      name="photo"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <span className="text-sm text-gray-600">
                      {images.length} selected
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  {isLoading ? "Updating..." : "Update Property"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateHouseModal;
