import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import {
  Carousel,
  FilterSidebar,
  PackageCard,
  Pagination,
} from "../components";

const Landing = () => {
  return (
    <>
      <div className="carousel-div">
        <Carousel />
      </div>
      <div className="content-wrapper container-xxl p-0">
        <h1 className="title center">Travel Packages</h1>
        <div className="content-detached content-right">
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
                      <div className="search-results">16285 results found</div>
                    </div>
                    <div className="view-options d-flex">
                      <div className="btn-group dropdown-sort">
                        <button
                          type="button"
                          className="btn btn-outline-primary dropdown-toggle me-1"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="active-sorting">Featured</span>
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Featured
                          </a>
                          <a className="dropdown-item" href="#">
                            Lowest
                          </a>
                          <a className="dropdown-item" href="#">
                            Highest
                          </a>
                        </div>
                      </div>
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

export default Landing;
