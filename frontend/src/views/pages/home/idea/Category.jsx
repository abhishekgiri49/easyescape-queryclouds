import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { CategoryService } from "../../../../repositories";
const Category = () => {
  const Title = "Category";
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchCategoryList();
  }, []);

  const fetchCategoryList = () => {
    CategoryService.get().then((data) => {
      setRows(data);
    });
  };
  return (
    <>
      <div className="content-wrapper container-xxl p-1">
        <div className="content-detached">
          <div className="content-body">
            <div className="trip-page">
              <section id="profile-info" className="trip-container">
                <div class="trip_header row">
                  <h2 class="trip_header__title">Trip Ideas</h2>
                </div>

                <h4 class="trip__title">{Title}</h4>
                <div className="row">
                  {rows &&
                    rows.map((row) => (
                      <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="box">
                          <a href="#">
                            <img
                              src={`/src/assets/uploads/categories/${row.image}`}
                              alt=""
                            />
                            <div class="box__title">
                              <h6>{row.title}</h6>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
