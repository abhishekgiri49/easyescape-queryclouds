import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PackageService } from "../../../repositories";
import "../../../assets/css/pages/page-profile.css";
import { Breadcrumb, DataTable, Alert } from "../../components";
const Detail = () => {
  const [packageDetail, setPackageDetail] = useState({});
  const Title = "Package";
  const { packageId } = useParams();
  const breadcrumb = [
    { path: "/packages", name: `${Title} List` },
    { name: `${packageDetail.title}` },
  ];
  useEffect(() => {
    // Fetch blog details  when the component mounts
    fetchPackageDetails();
  }, [packageId]);
  const fetchPackageDetails = () => {
    // Fetch blog details based on the id
    PackageService.find(packageId)
      .then((data) => {
        setPackageDetail(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
        setErrorMessage("Error fetching package details. Please try again.");
      });
  };
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <Breadcrumb routes={breadcrumb} title={`${Title} Management`} />
          </div>
        </div>
        <div class="content-body">
          <div id="user-profile">
            <div class="row">
              <div class="col-12">
                <div class="card profile-header mb-2">
                  <img
                    class="card-img-top"
                    src={`/src/assets/uploads/packages/${
                      packageDetail.image || "default_package.jpg"
                    }`}
                    alt="Package Image"
                  />
                </div>
              </div>
            </div>

            <section id="profile-info">
              <div class="row">
                <div class="col-lg-9 col-12 order-1 order-lg-2">
                  <div class="card">
                    <div class="card-body">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: packageDetail.content,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-12 order-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="mb-75">About</h5>
                      <p class="card-text">
                        Tart I love sugar plum I love oat cake. Sweet ⭐️ roll
                        caramels I love jujubes. Topping cake wafer.
                      </p>
                      <div class="mt-2">
                        <h5 class="mb-75">Joined:</h5>
                        <p class="card-text">November 15, 2015</p>
                      </div>
                      <div class="mt-2">
                        <h5 class="mb-75">Lives:</h5>
                        <p class="card-text">New York, USA</p>
                      </div>
                      <div class="mt-2">
                        <h5 class="mb-75">Email:</h5>
                        <p class="card-text">bucketful@fiendhead.org</p>
                      </div>
                      <div class="mt-2">
                        <h5 class="mb-50">Website:</h5>
                        <p class="card-text mb-0">www.pixinvent.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
