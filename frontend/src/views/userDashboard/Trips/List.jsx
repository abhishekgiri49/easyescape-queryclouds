import { TripService } from "../../../repositories";
import { Pagination } from "../../components";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
const List = () => {
  const [rows, setRows] = useState([]);
  const [limit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetchList();
  }, []);
  const fetchList = () => {
    TripService.getByUser(currentPage, limit).then((data) => {
      setRows(data.trips);
      setTotalPages(data.totalPages);
    });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div id="orders" role="tabpanel">
        <div className="myaccount-content">
          <h3>My Booked Trips</h3>
          <div className="myaccount-table table-responsive text-center">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Trip Id</th>
                  <th>Package</th>
                  <th>Guests</th>
                  <th>Departure Date</th>
                  <th>Booking Status</th>
                  <th>Payment Status</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.package.title}</td>
                    <td>{item.numberOfPeople}</td>
                    <td>
                      {new Date(item.departureDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }
                      )}
                    </td>{" "}
                    {/* Corrected property name */}
                    <td>
                      {item.bookingStatus === "Booked" ? (
                        <span className="badge badge-glow bg-primary">
                          Booked
                        </span>
                      ) : (
                        <span className="badge badge-glow bg-danger">
                          Pending
                        </span>
                      )}
                    </td>
                    <td>
                      {item.paymentStatus === "Paid" ? (
                        <span className="badge badge-glow bg-primary">
                          Paid
                        </span>
                      ) : (
                        <span className="badge badge-glow bg-danger">
                          Pending
                        </span>
                      )}
                    </td>
                    <td>{item.totalAmount}</td>
                    <td>
                      <Link
                        to={`/dashboard/trips/${item._id}`}
                        className="btn flosun-button secondary-btn theme-color  rounded-0"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {rows.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                limit={limit}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default List;
