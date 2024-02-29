import { FaAlignJustify } from "react-icons/fa";
import { Breadcrumb, DataTable, Alert } from "../../components";
import { Link } from "react-router-dom";
import { PackageService } from "../../../repositories";
import {
  FilterSidebar,
  PackageCard,
  Pagination,
  SearchBar,
} from "../../components";

const Search = () => {
  return (
    <>
      <div className="flex flex-wrap w-full h-screen"></div>
      <SearchBar />
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
                      <div className="search-results">0 results found</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="body-content-overlay"></div>

            <section id="ecommerce-products" className="grid-view">
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
            </section>
            <Pagination />
          </div>
        </div>
        <FilterSidebar />
      </div>
    </>
  );
};

export default Search;
