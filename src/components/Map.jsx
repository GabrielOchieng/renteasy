import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Map = ({ town }) => {
  const [map, setMap] = useState(null);
  const [houseLocation, setHouseLocation] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${town}`
        );
        const data = response.data[0];
        if (data) {
          setHouseLocation({
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lon),
          });
        } else {
          console.warn(`No results found for town: ${town}`);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [town]);

  console.log("LOCATION", houseLocation);

  useEffect(() => {
    if (!map && houseLocation) {
      const mapInstance = L.map("map").setView(houseLocation, 13); // Adjust zoom level as needed

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapInstance);

      L.marker(houseLocation).addTo(mapInstance);

      setMap(mapInstance);
    }
  }, [map, houseLocation]);

  return (
    <div>
      {houseLocation && (
        <div>
          {" "}
          <p>Location</p>
          <div id="map" style={{ height: "400px", width: "400px" }}></div>
        </div>
      )}
    </div>
  );
};

export default Map;
