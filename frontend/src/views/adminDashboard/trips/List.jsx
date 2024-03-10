import { useEffect, useState, useMemo } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Breadcrumb, DataTable, Alert } from "../../components";
import { Link } from "react-router-dom";
import { TripService } from "../../../repositories";

const List = () => {
  const Title = "Trip";
  const [anchorEl, setAnchorEl] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [clickedRow, setClickedRow] = useState(null);
  const [show, setShow] = useState(null);
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    status: "",
  });

  const breadcrumb = [{ name: `${Title} List` }];
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    TripService.get().then((data) => {
      setRows(data);
    });
  };

  const columns = [
    {
      field: "title",
      headerName: "Package Title",
      width: 200,
      renderCell: (params) => (
        <Link
          to={`detail/${params.row._id}`}
          className="d-flex align-items-center"
        >
          {params.row.package.title}
        </Link>
      ),
    },
    { field: "numberOfPeople", headerName: "Number of People", width: 120 },
    { field: "totalAmount", headerName: "Amount", width: 120 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 120 },
    {
      field: "bookingStatus",
      headerName: "Booking Status",
      width: 160,
      renderCell: (params) =>
        params.row.bookingStatus === "Booked" ? (
          <span className="badge badge-glow bg-primary">Booked</span>
        ) : (
          <span className="badge badge-glow bg-danger">Pending</span>
        ),
    },
    {
      field: "package",
      headerName: "Package",
      width: 200,
      renderCell: (params) =>
        params.row.package != "" ? (
          <span>{params.row.package.title}</span>
        ) : (
          <span>None</span>
        ),
    },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) =>
        params.row.user != "" ? (
          <span>
            {params.row.user.firstName + " " + params.row.user.lastName}
          </span>
        ) : (
          <span>None</span>
        ),
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 160,
      renderCell: (params) =>
        params.row.paymentStatus === "Paid" ? (
          <span className="badge badge-glow bg-primary">Paid</span>
        ) : (
          <span className="badge badge-glow bg-danger">Pending</span>
        ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
          <FaEllipsisV
            variant="outlined"
            size={20}
            onClick={(event) => handleMenuClick(event, params.row._id)}
          />
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((menuItem, index) => (
              <MenuItem key={index} onClick={menuItem.onClick}>
                {menuItem.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ),
    },
  ];
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteAction = (id) => {
    TripService.delete(id)
      .then(() => {
        fetchList();
        Alert("success", `${Title} has been deleted successfully`);
        handleClose();
      })
      .catch((error) => {});
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setClickedRow(id);
  };

  const menuItems = useMemo(
    () => [
      // { label: "Edit", onClick: () => handleEditAction(clickedRow) },
      { label: "Delete", onClick: () => handleDeleteAction(clickedRow) },
      // Add more items as needed
    ],
    [clickedRow]
  );

  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <Breadcrumb routes={breadcrumb} title={`${Title} Management`} />
        </div>
      </div>
      <div className="content-body">
        <div className="row">
          <div className="col-12">
            <section className="invoice-list-wrapper">
              <div className="card">
                <div className="card-datatable table-responsive">
                  <DataTable columns={columns} rows={rows} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
