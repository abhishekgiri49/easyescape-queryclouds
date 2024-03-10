import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PlaceService } from "../../../repositories";
const SearchBar = ({ onChangeSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    fetchSearchParameter();
    fetchFilterList();
  }, []);
  useEffect(() => {
    onChangeSearch(formData);
  }, [formData]);
  const fetchSearchParameter = () => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("place")) {
      setFormData((prev) => ({ ...prev, place: searchParams.get("place") }));
    }
    if (searchParams.has("checkInDate")) {
      setFormData((prev) => ({
        ...prev,
        checkInDate: searchParams.get("checkInDate"),
      }));
    }
    if (searchParams.has("checkOutDate")) {
      setFormData((prev) => ({
        ...prev,
        checkOutDate: searchParams.get("checkOutDate"),
      }));
    }
    if (searchParams.has("numberOfPeople")) {
      setFormData((prev) => ({
        ...prev,
        numberOfPeople: searchParams.get("numberOfPeople"),
      }));
    }
    // formData.place = searchParams.get("place");
  };
  const fetchFilterList = () => {
    PlaceService.get().then((data) => {
      setPlaces(data);
    });
  };
  // Handles the onChange event of each input field.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const search = () => {
    const searchParams = new URLSearchParams(formData);
    navigate("/search?" + searchParams.toString());
  };
  return (
    <div className="searchcontainer">
      {/* <img
        alt="plane"
        class="plane"
        src="https://i.ibb.co/52bG3RC/landingpage-assets-0005-plane.png"
      ></img> */}

      <div className="right">
        <fieldset>
          <label>DESTINATION</label>
          <div>
            <select
              id="adults-number"
              name="place"
              value={formData.place}
              onChange={handleChange}
            >
              <option value="">Select a destination</option>
              {places &&
                places.map((place, index) => (
                  <option key={index} value={place.name}>
                    {place.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="left2">
            <label>CHECK-IN DATE</label>
            <input
              type="date"
              id="start"
              name="checkInDate"
              min="2024-01-01"
              value={formData.checkInDate}
              onChange={handleChange}
            />

            <label>ADULTS</label>
            <input
              list="adults"
              id="adults-number"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
            />
            <datalist id="adults">
              <option value="1 adult" />
              <option value="2 adults" />
              <option value="3 adults" />
              <option value="+3 adults" />
            </datalist>
          </div>

          <div className="right2">
            <label>CHECK-OUT DATE</label>
            <input
              type="date"
              id="end"
              name="checkOutDate"
              min="2024-01-01"
              value={formData.checkOutDate}
              onChange={handleChange}
            />
            <label>CHILDREN</label>
            <input
              list="children"
              id="children-number"
              name="children-number"
            />
            <datalist id="children">
              <option value="No children" />
              <option value="1" />
              <option value="2" />
              <option value="3" />
            </datalist>
          </div>

          <div className="button">
            <button className="btn" onClick={search}>
              Search
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};
export default SearchBar;
