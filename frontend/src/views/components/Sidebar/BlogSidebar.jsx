import { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CategoryService, PlaceService } from "../../../repositories";
const BlogSidebar = ({ onChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [places, setPlaces] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    parameter: "",
    destinationFilter: "",
    categoryFilter: "",
  });
  useEffect(() => {
    onChange(formData);
  }, [formData]);
  useEffect(() => {
    fetchSearchParameter();
    fetchFilterList();
  }, []);
  const fetchSearchParameter = () => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("category")) {
      setFormData((prev) => ({
        ...prev,
        categoryFilter: searchParams.get("category"),
      }));
    }

    // formData.place = searchParams.get("place");
  };
  const fetchFilterList = () => {
    CategoryService.get().then((data) => {
      setCategories(data);
    });
    PlaceService.get().then((data) => {
      setPlaces(data);
    });
  };
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Pass the updated form data to the parent component
  };
  const handleChangeCategory = (title) => {
    if (title === "All") {
      setFormData((prev) => ({
        ...prev,
        categoryFilter: "",
      }));
      navigate("/idea/search");
    } else {
      setFormData((prev) => ({
        ...prev,
        categoryFilter: title,
      }));
      navigate("/idea/search?category=" + title);
    }
  };
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setFormData({
      ...formData,
      parameter: searchValue,
    });
  };
  return (
    <aside class="sidebar_widget widget-mt">
      <div class="widget_inner">
        <div class="widget-list widget-mb-1">
          <h3 class="widget-title">Search</h3>
          <div class="search-box">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={handleSearch}
                >
                  <CiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="widget-list widget-mb-1">
          <h3 class="widget-title">Categories</h3>
          <div class="sidebar-body">
            <ul class="tags">
              <li>
                <span
                  className={formData.categoryFilter == "" ? "selected" : ""}
                  onClick={() => handleChangeCategory("All")}
                >
                  All Category
                </span>
              </li>
              {categories &&
                categories.map((category, index) => (
                  <li key={index}>
                    <span
                      onClick={() => handleChangeCategory(category.title)}
                      className={
                        formData.categoryFilter == category.title
                          ? "selected"
                          : ""
                      }
                    >
                      {category.title}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div class="widget-list widget-mb-3">
          <h3 class="widget-title">Places</h3>
          <div class="sidebar-body">
            <ul class="tags">
              <li>
                <span
                  className={formData.destinationFilter == "" ? "selected" : ""}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      destinationFilter: "",
                    })
                  }
                >
                  All Places
                </span>
              </li>
              {places &&
                places.map((place, index) => (
                  <li key={index}>
                    <span
                      onClick={() =>
                        handleChange("destinationFilter", place.country)
                      }
                      className={
                        formData.destinationFilter == place.country
                          ? "selected"
                          : ""
                      }
                    >
                      {place.country}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default BlogSidebar;
