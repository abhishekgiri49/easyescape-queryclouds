import { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Breadcrumb, DataTable, LoadingScreen } from "../../components";
import { Link, useLocation } from "react-router-dom";
import { PackageService } from "../../../repositories";
import {
  FilterSidebar,
  PackageCard,
  Pagination,
  SearchBar,
} from "../../components";

const Search = () => {
  const [packages, setPackages] = useState([]);
  const [formData, setFormData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      fetchList();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [formData]);
  const fetchList = () => {
    PackageService.getPackageWithFilters(formData).then((data) => {
      setPackages(data);
    });
  };

  const handleFilters = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };
  return (
    <>
      <div className="flex flex-wrap w-full h-screen"></div>
      <SearchBar onChangeSearch={handleFilters} />
      <div className="content-wrapper container-xxl p-0">
        <div className="content-detached content-right">
          <h1 className="title center">Travel Packages</h1>
          <div className="content-body">
            <section id="ecommerce-header">
              <div className="row">
                <div className="col-sm-12">
                  <div className="ecommerce-header-items">
                    <div className="result-toggler">
                      <button
                        className="navbar-toggler shop-sidebar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                      >
                        <span className="navbar-toggler-icon d-block d-lg-none">
                          <FaAlignJustify />
                        </span>
                      </button>
                      <div className="search-results">
                        {packages.length} results found
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="body-content-overlay"></div>

            <section id="ecommerce-products" className="grid-view">
              {packages.map((packageData, index) => (
                <PackageCard key={index} packageData={packageData} />
              ))}
            </section>
            <Pagination />
          </div>
        </div>
        <FilterSidebar onChange={handleFilters} />
      </div>
    </>
  );
};

export default Search;
