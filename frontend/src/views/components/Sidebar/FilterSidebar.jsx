const FilterNavbar = () => {
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
                  <ul className="list-unstyled price-range" id="price-range">
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceAll"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceAll">
                          All
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceRange1"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceRange1">
                          &lt;=$100
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceRange2"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceRange2">
                          $100 - $500
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceARange3"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceARange3">
                          $500 - $100
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="priceRange4"
                          name="price-range"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="priceRange4">
                          &gt;= $100
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div id="product-categories">
                  <h6 className="filter-title">Places</h6>
                  <ul className="list-unstyled categories-list">
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category1"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category1">
                          Goa
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category2"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category2">
                          thailand
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category3"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category3">
                          Dubai
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category4"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category4">
                          Vietnam
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="product-categories">
                  <h6 className="filter-title">Categories</h6>
                  <ul className="list-unstyled categories-list">
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category1"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category1">
                          Cultures
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category2"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category2">
                          Adventure
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category3"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category3">
                          Honeymoon
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="category4"
                          name="category-filter"
                          className="form-check-input"
                        />
                        <label className="form-check-label" for="category4">
                          Pilgrimage
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="clear-filters">
                  <button type="button" className="btn w-100 btn-primary">
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
