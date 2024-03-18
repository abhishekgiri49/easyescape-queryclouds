import { useEffect, useState } from "react";
import { CategoryService } from "../../../repositories";
import { PlaceService } from "../../../repositories";
const FilterNavbar = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState({
    priceRange: "all",
    destinationFilter: "",
    categoryFilter: [],
  });
  useEffect(() => {
    onChange(formData);
  }, [formData]);
  useEffect(() => {
    fetchFilterList();
  }, []);
  const fetchFilterList = () => {
    CategoryService.get().then((data) => {
      setCategories(data);
    });
    PlaceService.get().then((data) => {
      setPlaces(data);
    });
  };
  // Handles the onChange event of each input field.
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "categoryFilter") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Pass the updated form data to the parent component
  };
  return (
    <>
      <div className="sidebar-detached sidebar-left">
        <div className="sidebar">
          <div className="sidebar-shop">
            <div className="row">
              <div className="col-sm-12">
                <h6 className="filter-heading d-none d-lg-block">Filters</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="multi-range-price">
                  <h6 className="filter-title mt-0">Budget</h6>
                  <ul className="list-unstyled priceRange" id="priceRange">
                    {[
                      { label: "All", value: "all" },
                      { label: "<=$100", value: "$0-$100" },
                      { label: "$100 - $500", value: "$100-$500" },
                      { label: "$500 - $1000", value: "$500-$1000" },
                      { label: ">= $1000", value: ">=$1000" },
                    ].map((range, index) => (
                      <li key={index}>
                        <div className="form-check">
                          <input
                            type="radio"
                            id={`priceRange${index}`}
                            name="priceRange"
                            className="form-check-input"
                            onChange={handleChange}
                            value={range.value}
                            checked={formData.priceRange.includes(range.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`priceRange${index}`}
                          >
                            {range.label}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="product-categories">
                  <h6 className="filter-title">Places</h6>
                  <ul className="list-unstyled categories-list">
                    {places &&
                      places.map((place, index) => (
                        <li>
                          <div className="form-check">
                            <input
                              type="radio"
                              id={`destination${index}`}
                              name="destinationFilter"
                              className="form-check-input"
                              onChange={handleChange}
                              value={place.country}
                              checked={
                                formData.destinationFilter &&
                                formData.destinationFilter == place.country
                              }
                            />
                            <label className="form-check-label" for="category4">
                              {place.country}
                            </label>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <div id="product-categories">
                  <h6 className="filter-title">Categories</h6>
                  <ul className="list-unstyled categories-list">
                    {categories &&
                      categories.map((category, index) => (
                        <li>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id={`category${index}`}
                              name="categoryFilter"
                              className="form-check-input"
                              onChange={handleChange}
                              value={category.title}
                              checked={
                                formData.categoryFilter &&
                                formData.categoryFilter.includes(category.title)
                              }
                            />
                            <label className="form-check-label" for="category4">
                              {category.title}
                            </label>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <div id="clear-filters">
                  <button
                    type="button"
                    className="btn w-100 btn-primary"
                    onClick={() =>
                      setFormData({
                        priceRange: "all",
                        destinationFilter: "",
                        categoryFilter: [],
                      })
                    }
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterNavbar;
