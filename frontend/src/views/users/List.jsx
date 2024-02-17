import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Breadcrumb, DataTable } from "../components";
import { AdminAdd } from "../../views";
const List = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedRow, setClickedRow] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditAction = (id) => {
    console.log(`Edit action clicked for row with ID ${id}`);
  };

  const handleDeleteAction = (id) => {
    console.log(`Delete action clicked for row with ID ${id}`);
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setClickedRow(id);
  };
  const handleOpenModal = () => {
    $("#addNewAddressModal").modal("show");
  };

  const handleCloseModal = () => {
    $("#addNewAddressModal").modal("hide");
  };
  const menuItems = [
    { label: "Edit", onClick: () => handleEditAction(clickedRow) },
    { label: "Delete", onClick: () => handleDeleteAction(clickedRow) },
    // Add more items as needed
  ];
  const handleModalSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    // Handle form submission logic here
    handleCloseModal();
  };
  const breadcrumb = [{ name: "Admin List" }];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 300,
      renderCell: (params) =>
        params.row.status === true ? (
          <span className="badge badge-glow bg-primary">Active</span>
        ) : (
          <span className="badge badge-glow bg-danger">Inactive</span>
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
            onClick={(event) => handleMenuClick(event, params.row.id)}
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

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      email: "snow@gmail.com",
      role: "Superadmin",
      status: false,
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      email: "Cersei@gmail.com",
      role: "Admin",
      status: true,
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      email: "Jaime@gmail.com",
      role: "Manager",
      status: true,
    },
  ];

  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <Breadcrumb routes={breadcrumb} title="Admin List" />
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenModal}
            >
              Create New
            </button>
          </div>
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
      <AdminAdd onClose={handleCloseModal} onSubmit={handleModalSubmit} />
    </div>
  );
};

export default List;
