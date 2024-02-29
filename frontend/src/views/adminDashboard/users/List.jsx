import { useEffect, useState, useMemo } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Breadcrumb, DataTable, Alert } from "../../components";

import { UserService } from "../../../repositories";
import { UserAdd } from "../../../views";
const List = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [clickedRow, setClickedRow] = useState(null);
  const [show, setShow] = useState(null);
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const breadcrumb = [{ name: "User List" }];
  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    UserService.get().then((data) => {
      setRows(data);
    });
  };

  const columns = [
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
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
    console.log("close");
    setAnchorEl(null);
  };

  const handleEditAction = (id) => {
    const rowIndex = rows.findIndex((row) => row._id === id);
    setFormData(rows[rowIndex]);
    setEditMode(true);
    handleClose();
    setShow(true);
  };

  const handleDeleteAction = (id) => {
    UserService.delete(id)
      .then(() => {
        fetchUserList();
        Alert("success", `User data has been deleted successfully`);
        handleClose();
      })
      .catch((error) => {});
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setClickedRow(id);
  };
  const handleOpenModal = () => {
    setShow(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  const menuItems = useMemo(
    () => [
      { label: "Edit", onClick: () => handleEditAction(clickedRow) },
      { label: "Delete", onClick: () => handleDeleteAction(clickedRow) },
      // Add more items as needed
    ],
    [clickedRow]
  );
  const handleModalSubmit = (formData) => {
    if (editMode) {
      // If in edit mode, update existing admin
      UserService.update(formData._id, formData)
        .then(() => {
          setErrors({});
          handleCloseModal();
          Alert("success", `User data has been updated successfully`);
          fetchUserList();
          handleClose();
          // Optionally, you can redirect or perform other actions after successful update
        })
        .catch((error) => {
          handleErrors(error);
        });
    } else {
      // If not in edit mode, create new admin
      UserService.create(formData)
        .then(() => {
          setErrors({});
          handleCloseModal();
          Alert("success", `User data has been created successfully`);
          fetchUserList();
          handleClose();
          // Optionally, you can redirect or perform other actions after successful addition
        })
        .catch((error) => {
          handleErrors(error);
        });
    }
    // Handle form submission logic here
  };
  const handleErrors = (error) => {
    if (error.status === 422) {
      const newErrors = {};
      error.data.data.forEach((item) => {
        const fieldName = item.path;
        const errorMsg = item.msg;
        newErrors[fieldName] = errorMsg;
      });
      setErrors(newErrors);
    } else {
      setErrorMessage("Error performing. Please try again.");
    }
  };
  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <Breadcrumb routes={breadcrumb} title="User Management" />
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
      <UserAdd
        editMode={editMode}
        initialFormData={formData}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        errors={errors}
        show={show}
      />
    </div>
  );
};

export default List;
