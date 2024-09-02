import { useRef, useState } from "react";
import { useCreateHouseMutation } from "../redux/slices/housesApiSlice";
import { toast } from "react-toastify"; // Import toast from react-toastify

const HouseForm = () => {
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [estate, setEstate] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [rentPrice, setRentPrice] = useState(0);
  const [images, setImages] = useState([]); // Array of image URLs
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const [createHouse] = useCreateHouseMutation();
  const hiddenFileInputRef = useRef(null);

  const handleClick = () => {
    hiddenFileInputRef.current.click();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
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
      const response = await createHouse(formData);

      // Check if the response indicates success
      if (response && response.error === undefined) {
        // Show success toast notification
        toast.success("House created successfully!");

        // Clear form fields
        setStreet("");
        setTown("");
        setEstate("");
        setAddress("");
        setPropertyType("");
        setBedrooms(0);
        setBathrooms(0);
        setRentPrice(0);
        setImages([]);
        setDescription("");
        setContactInfo("");
      } else {
        // Handle case where response is not successful
        throw new Error("Failed to create house");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error creating house. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  return (
    <div className="flex flex-col pt-4 gap-3 w-full bg-gray-300">
      <div className="">
        <h1 className="text-3xl font-bold text-center ">Add Your Property</h1>
      </div>
      <div>
        <form className="space-y-4 w-[90%] mx-auto  " onSubmit={handleSubmit}>
          {/* Address Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                name="street"
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
                name="town"
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
                name="estate"
                value={estate}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                onChange={(e) => setEstate(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700"
              >
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={address}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label
              htmlFor="propertyType"
              className="block text-sm font-medium text-gray-700"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
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

          {/* Bedrooms and Bathrooms */}
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
                name="bedrooms"
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
                id="bedrooms"
                name="bedrooms"
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
                name="rentPrice"
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
                type="string"
                id="contactInfo"
                name="contactInfo"
                value={contactInfo}
                required
                min="1"
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
                name="description"
                value={description}
                required
                rows={5}
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
              <div className="flex items-center space-x-4">
                <button onClick={handleClick}>Select Photos</button>
                <input
                  type="file"
                  id="photo"
                  ref={hiddenFileInputRef}
                  name="photo"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="my-5 ">
              <button
                type="submit"
                className="w-full  bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              >
                Add Property
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HouseForm;
