const Pagination = () => {
  return (
    <>
      <section id="ecommerce-pagination">
        <div className="row">
          <div className="col-sm-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center mt-2">
                <li className="page-item prev-item">
                  <a className="page-link" href="#"></a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item" aria-current="page">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item next-item">
                  <a className="page-link" href="#"></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};
export default Pagination;
